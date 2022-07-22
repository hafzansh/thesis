# api.py
import json
from datetime import datetime
from typing import Any
from fastapi import APIRouter, Depends, HTTPException,Response
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_training import ml_model
from app.services.machine_learn.ml_services import ai_model,ai_pred
from app.services.machine_learn.ml_predict import predict_model
from app.services.data.padi import *
from app.models.user import User
from app.api import deps
from app.models.ai_model import *
from app.models.ai_predict import *
from app.schemas.ai_model_schema import *
from app.schemas.ai_predict_schema import *
from app.schemas.ai_predicts_schema import *
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
@router.get("/predicts/data")
def list_data_model(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Retrieve Predictions Data.
    """    
    response = ai_pred.get_all_data(db)
    return response

@router.get("/id/{id}")
def get_data_by_id(    
    *,
    db: Session = Depends(deps.get_db),            
    id:int,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    response = ai_model.get(db=db, id=id)
    if not response:
        raise HTTPException(status_code=404, detail="Item not found")
    return response


@router.post("/predict/")
def train_model(*,db:Session=Depends(deps.get_db), input: AI_PredictBase,
current_user: User = Depends(deps.get_current_active_user),
) -> Any:    
    result = predict_model.predict(input)
    x = {"result": result.flatten().tolist()}
    return json.dumps(x)

@router.post("/predicts/")
def train_model(*,db:Session=Depends(deps.get_db), input: AI_PredictsBase,
current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    timestamp = datetime.now()
    result = predict_model.predicts(input)
    post = ai_pred.post_predict(db=db,obj_in={  
        "created_on": timestamp,
        "path": input.path,
        "data": result,
    })    
    if not result:
        raise HTTPException(status_code=500,detail="Something went wrong!")
    return HTTPException(
        status_code=200,detail=post
    )
@router.post("/test/")
def train_model(*,db:Session=Depends(deps.get_db), input: AI_PredictsBase,

) -> Any:
    
    post = ai_pred.post_predict(db=db,obj_in={        
        "created_on": "pog i was here pog",
        "path": "input.path",
        "data": "result",
    })        
    return HTTPException(
        status_code=200,detail=post
    )

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
