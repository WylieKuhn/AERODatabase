from fastapi import FastAPI
from pydantic import BaseModel
from key_file import mongoKey
from pymongo.mongo_client import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

app = FastAPI()
#define FastAPI app 
app = FastAPI()

class School(BaseModel):
    orgName:str
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
    
    

    categories = ["Democratic", "Sudbury"]

    # The query filter.
    query_filter = {
    "categories": {
        "$in": categories
    }
    }
    # The cursor object.
    results = col.find(query_filter)

    print(results.collection.estimated_document_count)
       
    return list(results)