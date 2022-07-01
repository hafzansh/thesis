# api.py
from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_training import ml_model
from app.services.machine_learn.ml_services import ai_model
from app.services.data.padi import *
from app.models.user import User
from app.api import deps
router = APIRouter()

@router.post("/training/")
def train_model(        
    
    db: Session = Depends(deps.get_db),
    node: int = 15,
    size: float = 0.3,
    rate: float = 0.01,    
    ep: int = 500,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:    
    data = padi.get_all_padi_iklim(db)    
    trained = ml_model.train(data,node,size,rate,ep)
    ai_model.post_data(db=db,obj_in={
        "path": ml_model.path,
        "node": node,
        "epoch": ep,
        "mae": ml_model.mae,
        "loss": ml_model.history,
        "result":  trained
    })    
    return trained
