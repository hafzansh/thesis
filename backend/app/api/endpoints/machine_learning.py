# api.py
from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_services import MLModel
from app.services.data.padi import *
from app.models.user import User
from app.api import deps

router = APIRouter()

@router.post("/training/")
def train_model(    
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    data = padi.get_all_padi_iklim(db)
    trained = MLModel.train(MLModel,data,15,0.28,0.01)
    return trained
