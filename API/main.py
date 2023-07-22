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

    

    

@app.get("/")
async def test():
    return {"test": "Success"}

@app.get("/api/v1/addschool")
async def send(school: School):
    pass
    
    
    