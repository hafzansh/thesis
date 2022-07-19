# api.py
from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_training import ml_model
from app.services.machine_learn.ml_services import ai_model
from app.services.data.padi import *
from app.models.user import User
from app.api import deps
from app.models.ai_model import *
router = APIRouter()

@router.get("/")
def list_data_model(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Retrieve users.
    """    
    response = ai_model.get_all_data(db)
    return response

@router.get("/id/{id}")
def get_data_Iklim_by_id(    
    *,
    db: Session = Depends(deps.get_db),            
    id:int,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    response = ai_model.get(db=db, id=id)
    if not response:
        raise HTTPException(status_code=404, detail="Item not found")
    return response

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
    post = ai_model.post_data(db=db,obj_in={
        "path": ml_model.path,
        "node": node,
        "epoch": ep,
        "mae": ml_model.mae,
        "size": size,
        "rate": rate,
        "loss": ml_model.history,
        "result":  trained
    })    
    if not trained:
        raise HTTPException(status_code=500,detail="Something went wrong")
    return HTTPException(
        status_code=200,detail=post.id
    )
