from sqlalchemy import engine_from_config
from sqlalchemy.orm import Session
from app.core.config import settings
from app.database import base
from app.database.base_class import Base
def init_db(db: Session) -> None:
    Base.metadata.create_all(bind=engine_from_config)
