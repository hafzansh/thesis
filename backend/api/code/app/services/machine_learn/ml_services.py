from typing import List
from fastapi import HTTPException

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.services.base import ServicesBase
from app.models.ai_model import AI_Model
from app.models.ai_predict import AI_Predict
from app.schemas.ai_model_schema import AI_ModelCreate,AI_ModelUpdate
from app.schemas.ai_predicts_schema import AI_PredictsCreate, AI_PredictsUpdate


class CrudAI_Model(ServicesBase[AI_Model,AI_ModelCreate,AI_ModelUpdate]):

    def get_all_data(
        self, db: Session
    ) -> List[AI_Model]:
        return (
            db.query(self.model)
            .all()
        )
        
    def post_data(
        self, db: Session, *, obj_in: AI_ModelCreate
    ) -> AI_Model:        
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

class CrudAI_Pred(ServicesBase[AI_Predict,AI_PredictsCreate,AI_PredictsUpdate]):
    def get_all_data(
        self, db: Session
    ) -> List[AI_Predict]:
        return (
            db.query(self.model)
            .all()
        )
    def get_data_by_id(
        self, db: Session,id:id
    ) -> List[AI_Predict]:
        return (
            db.query(self.model)
            .filter_by(id=id)
            .all()
        )
    def post_predict(
        self, db: Session, *, obj_in: AI_PredictsCreate
    ) -> AI_Predict:        
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
ai_pred = CrudAI_Pred(AI_Predict)
ai_model = CrudAI_Model(AI_Model)
