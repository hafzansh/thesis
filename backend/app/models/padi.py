
from enum import unique
from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, Float

from app.database.base_class import Base

class Padi(Base):
    __tablename__ = "data_padi"
    id = Column(Integer, unique=True, index=True)
    kota = Column(String, primary_key=True, index=True)
    tahun = Column(String, primary_key=True, index=True)
    luas_panen = Column(Float)
    luas_lahan = Column(Float)
    produktivitas = Column(Float)
    produksi = Column(Float)