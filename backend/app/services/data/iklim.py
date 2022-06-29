from typing import List

from sqlalchemy.orm import Session

from app.services.base import ServicesBase
from app.models.iklim import Iklim
from app.schemas.iklim_schema import IklimCreate,IklimUpdate


class CrudIklim(ServicesBase[Iklim,IklimCreate,IklimUpdate]):

    def get_all_data(
        self, db: Session, offset: int = 0, limit: int = 100
    ) -> List[Iklim]:
        return (
            db.query(self.model)
            .offset(offset)
            .limit(limit)
            .all()
        )        

    def post_data_iklim(
        self, db: Session, *, obj_in: IklimCreate
    ) -> Iklim:        
        db_obj = self.model(**obj_in.dict())
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

iklim = CrudIklim(Iklim)