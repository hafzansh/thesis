from typing import Optional

from pydantic import BaseModel, Json


# Shared properties
class AI_ModelBase(BaseModel):
    path: str
    node: str
    epoch: int
    mae: float
    size:float
    rate:float
    loss: Json
    result: Json


# Properties to receive on AI_Model creation
class AI_ModelCreate(AI_ModelBase):
    pass


# Properties to receive on AI_Model update
class AI_ModelUpdate(AI_ModelBase):
    pass


# Properties shared by models stored in DB
class AI_ModelInDBBase(AI_ModelBase):
    id: int

    class Config:
        orm_mode = True


# Properties to return to client
class AI_Model(AI_ModelInDBBase):
    pass


# Properties properties stored in DB
class AI_ModelInDB(AI_ModelInDBBase):
    pass