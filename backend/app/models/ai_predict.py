
from typing import TYPE_CHECKING

from sqlalchemy import JSON, Column, Integer, String, Float, TIMESTAMP

from app.database.base_class import Base
class AI_Predict(Base):
    __tablename__ = "data_prediction"
    id = Column(Integer, primary_key=True, index=True)
    created_on = Column(String)
    path = Column(String)
    data = Column(JSON)