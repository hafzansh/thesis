from typing import Optional

from pydantic import BaseModel, Json


# Shared properties
class AI_PredictBase(BaseModel):
    path: str
    kota: float 
    tahun: int 
    luas_panen: float 
    luas_lahan: float 
    produktivitas: float 
    stasiun: int 
    suhu_min: float 
    suhu_max: float 
    suhu_avg: float 
    humidity_avg: float 
    curah_hujan: float 
    hari_hujan: float 
    penyinaran: float 


# Properties to receive on AI_Predict creation
class AI_PredictCreate(AI_PredictBase):
    pass


# Properties to receive on AI_Predict update
class AI_PredictUpdate(AI_PredictBase):
    pass


# Properties shared by models stored in DB
class AI_PredictInDBBase(AI_PredictBase):
    path: str

    class Config:
        orm_mode = True


# Properties to return to client
class AI_Predict(AI_PredictInDBBase):
    pass


# Properties properties stored in DB
class AI_PredictInDB(AI_PredictInDBBase):
    pass

