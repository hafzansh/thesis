from lib2to3.pytree import Base
from fastapi import FastAPI
from pydantic import BaseModel,EmailStr

class EmailRes(BaseModel):
    id:int
    email:EmailStr