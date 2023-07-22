from fastapi import FastAPI
from pydantic import BaseModel

#define FastAPI app 
app = FastAPI()

class School(BaseModel):
    orgName:str
    address:str
    city:str
    state:str
    postCode:str
    phone:str
    email:str
    democratic:str
    sudbury:str
    hsCoOp:str
    AEROMember:str
    online:str
    inPerson:str
    sas:str
    tMin:int
    tMax:int
    consent:str

    

    

#receive sender's half of the transaction information and store it to the temporary database
@app.get("/")
async def send():
    pass

@app.post("/api/v1/addschool")
async def send(school: School):
    pass
    
    
    