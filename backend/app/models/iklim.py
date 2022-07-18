
from enum import unique
from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, Float

from app.database.base_class import Base

class Iklim(Base):
    __tablename__ = "data_iklim"
    id = Column(Integer,unique=True, index=True)
    stasiun = Column(String, primary_key=True, index=True)
    tahun = Column(String, primary_key=True, index=True)
    suhu_min = Column(Float)
    suhu_max = Column(Float)
    suhu_avg = Column(Float)
    humidity_avg = Column(Float)
    curah_hujan = Column(Float)
    hari_hujan = Column(Float)
    penyinaran = Column(Float)