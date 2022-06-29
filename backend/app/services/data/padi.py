from typing import List
from fastapi import HTTPException

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.services.base import ServicesBase
from app.models.padi import Padi
from app.models.iklim import Iklim
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
        
    def get_all_padi_iklim(
        self, db: Session
    ):
        return (
            db.query(self.model)            
            .join(Iklim, Padi.tahun == Iklim.tahun)
            .with_entities(
                self.model.kota,
                self.model.luas_panen,
                self.model.luas_lahan,
                self.model.produktivitas,
                Iklim.stasiun,
                Iklim.suhu_min,
                Iklim.suhu_max,
                Iklim.suhu_avg,
                Iklim.humidity_avg,
                Iklim.curah_hujan,
                Iklim.hari_hujan,
                Iklim.penyinaran,
                self.model.produksi                
            ).all()
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