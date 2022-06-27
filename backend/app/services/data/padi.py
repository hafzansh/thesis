from typing import List
from fastapi import HTTPException

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.services.base import ServicesBase
from app.models.padi import Padi
from app.schemas.padi_schema import PadiCreate,PadiUpdate


class CrudPadi(ServicesBase[Padi,PadiCreate,PadiUpdate]):

    def get_all_data(
        self, db: Session, offset: int = 0, limit: int = 100
    ) -> List[Padi]:
        return (
            db.query(self.model)
            .offset(offset)
            .limit(limit)
            .all()
        )
    def get_data_by_city(
        self, db: Session,city:str, offset: int = 0, limit: int = 100
    ) -> List[Padi]:
        return (
            db.query(self.model)
            .filter_by(kota=city)
            .offset(offset)
            .limit(limit)
            .all()
        )

    def post_data_padi(
        self, db: Session, *, obj_in: PadiCreate
    ) -> Padi:        
        db_obj = self.model(**obj_in.dict())
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

padi = CrudPadi(Padi)