from typing import Optional

from pydantic import BaseModel, Json


# Shared properties
class AI_PredictsBase(BaseModel):
    path: str
    data: object
    

# Properties to receive on AI_Predicts creation
class AI_PredictsCreate(AI_PredictsBase):
    pass


# Properties to receive on AI_Predicts update
class AI_PredictsUpdate(AI_PredictsBase):
    pass


# Properties shared by models stored in DB
class AI_PredictsInDBBase(AI_PredictsBase):
    id: int    
    class Config:
        orm_mode = True


# Properties to return to client
class AI_Predicts(AI_PredictsInDBBase):
    pass


# Properties properties stored in DB
class AI_PredictsInDB(AI_PredictsInDBBase):
    pass

