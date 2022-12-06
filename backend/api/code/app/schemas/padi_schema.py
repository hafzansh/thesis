from typing import Optional

from pydantic import BaseModel


# Shared properties
class PadiBase(BaseModel):
    kota: str
    tahun: str
    luas_panen: float
    luas_lahan: float
    produktivitas: float
    produksi: float


# Properties to receive on Padi creation
class PadiCreate(PadiBase):
    pass


# Properties to receive on Padi update
class PadiUpdate(PadiBase):
    pass


# Properties shared by models stored in DB
class PadiInDBBase(PadiBase):
    id: int
    
    class Config:
        orm_mode = True


# Properties to return to client
class Padi(PadiInDBBase):
    pass


# Properties properties stored in DB
class PadiInDB(PadiInDBBase):
    pass