from fastapi import FastAPI
from pydantic import BaseModel
from key_file import mongoKey
from pymongo.mongo_client import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

app = FastAPI()
origins = [
    "http://localhost:3000"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#define FastAPI app 

uri = f"mongodb+srv://wyliekuhn:{mongoKey}@cluster0.xg1yk.mongodb.net/?retryWrites=true&w=majority"
#Defining MongoDB Connections
client = MongoClient(uri)
db = client['AERO']
col = db['Members']

#Defining the model for the school payload
class SchoolModel(BaseModel):
    name:str
    address:str
    city:str
    state:str
    postCode:str
    phone:str
    email:str
    democratic:bool
    sudbury:bool
    hsCoOp:bool
    AEROMember:bool
    online:bool
    inPerson:bool
    sas:bool
    tMin:int
    tMax:int
    consent:bool

class Search(BaseModel):
    democratic: bool | None = None
    sudbury: bool | None = None
    hsCoOp: bool | None = None
    montessori: bool | None = None
    vcfirm: bool | None = None
    consulting: bool | None = None
    public: bool | None = None
    slidingscale: bool | None = None
    alc: bool | None = None
    AEROMember: bool | None = None
    online: bool | None = None
    inPerson: bool | None = None
    sas: bool | None = None
    college: bool | None = None,
    highSchool: bool | None = None,
    state: str

    

@app.get("/")
async def test():
    return {"test": "Success"}

@app.post("/api/v1/addschool")
async def send(school: SchoolModel):
    fullsend = {
        '_id': str(uuid4()), 
        'name': school.name,
        'address': school.address,
        'city': school.city,
        'state': school.state,
        'postCode':school.postCode,
        'phone': school.phone,
        'email': school.email,
        'categories': {
            'democratic': school.democratic,
            'sudbury': school.sudbury,
            'hsCoOp': school.hsCoOp,
            'AEROMember': school.AEROMember,
            'online': school.online,
            'inPerson': school.inPerson,
            'sas': school.sas
        },
        'tMin': school.tMin,
        'tMax': school.tMax,
        'consent': school.consent
    }

    try:
        x = col.insert_one(fullsend)
        print(x)
    except Exception as e:
        print(e)

@app.post("/api/v1/search")
async def post(search_params: Search):

    category_query = []
    print(search_params.state)


    if search_params.democratic is True:
        category_query.append("Democratic")
    if search_params.sudbury is True:
        category_query.append("Sudbury")
    if search_params.hsCoOp is True:
        category_query.append("Homeschool Co-Op")
    if search_params.AEROMember is True:
        category_query.append("AERO Member")
    if search_params.online is True:
        category_query.append("Online")
    if search_params.sas is True:
        category_query.append("Started By A School Starter")
    if search_params.inPerson is True:
        category_query.append("In person")
    if search_params.montessori is True:
        category_query.append("Montessori")
    if search_params.vcfirm is True:
        category_query.append("VC Firm")
    if search_params.consulting is True:
        category_query.append("Consulting")
    if search_params.public is True:
        category_query.append("Public")
    if search_params.slidingscale is True:
        category_query.append("Sliding Scale Tuition")
    if search_params.alc is True:
        category_query.append("Agile Learning Center")

    # The query filter.
    query_filter = {}
    if category_query and search_params.state:
        query_filter = {
        "categories": {"$all": category_query}, "state": search_params.state
        }

        if category_query and not search_params.state:
            query_filter = {"categories": {"$all": category_query}}
        
        if search_params.state and not category_query:
            query_filter = {"state": search_params.state}

    # The cursor object.
    results = col.find(query_filter)
    if not results:
        results = {}       
    return list(results)
