
from typing import TYPE_CHECKING

from sqlalchemy import JSON, Column, Integer, String, Float, TIMESTAMP

from app.database.base_class import Base

class AI_Model(Base):
    __tablename__ = "data_model"
    id = Column(Integer, primary_key=True, index=True)
    path = Column(String)
    node = Column(String)
    epoch = Column(Integer)
    mae = Column(Float)
    size = Column(Float)
    rate = Column(Float)
    loss = Column(JSON)
    result = Column(JSON)
