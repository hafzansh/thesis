import string
from typing import Optional

from pydantic import BaseModel


# Shared properties
class IklimBase(BaseModel):
    stasiun : str
    tahun : str
    suhu_min : float
    suhu_max : float
    suhu_avg : float
    humidity_avg : float
    curah_hujan : float
    hari_hujan : float
    penyinaran : float


# Properties to receive on Iklim creation
class IklimCreate(IklimBase):
    pass


# Properties to receive on Iklim update
class IklimUpdate(IklimBase):
    pass


# Properties shared by models stored in DB
class IklimInDBBase(IklimBase):
    id: int
    class Config:
        orm_mode = True


# Properties to return to client
class Iklim(IklimInDBBase):
    pass


# Properties properties stored in DB
class IklimInDB(IklimInDBBase):
    pass