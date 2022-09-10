import json
from datetime import datetime
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_services import ai_model, ai_pred
from app.services.data.padi import *
from app.services.mail.mail_services import mail_services
from app.api import deps
from app.models.user import User
from app.models.ai_model import *
from app.models.ai_predict import *
from app.schemas.ai_model_schema import *
from app.schemas.ai_predict_schema import *
from app.schemas.ai_predicts_schema import *
from app.services.google.gmail_services import gmail_service
from app.models.email_model import EmailRes
from app.services.mail.predict_mail_services import predict_mail_services
import uuid
router = APIRouter()


@router.post('/send_model')
def sending_model_through_email(
    *,
    db: Session = Depends(deps.get_db),
    payload: EmailRes,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    response = ai_model.get(db=db, id=payload.id)
    if not response:
        raise HTTPException(status_code=404, detail="Model not found")
    if response.drive_id == "None":
        data = mail_services.create_file(response)
        updated = {
            "mae": response.mae,
            "path": response.path,
            "node": response.node,
            "rate": response.rate,
            "result": response.result,
            "id": response.id,
            "epoch": response.epoch,
            "size": response.size,
            "loss": response.loss,
            "drive_id": data
        }
        ai_model.update(db=db, db_obj=response, obj_in=updated)
    param = {
        "loss": len(response.loss),
        "node": response.node,
        "rate": "{:.8f}".format(float(response.rate)),
        "size": response.size,
        "epoch": response.epoch,
        "email": payload.email,
        "mae": response.mae,
        "link": f"https://drive.google.com/drive/folders/{response.drive_id}",
        "title":'Model Data - JST.Padi'
    }
    gmail_service.send_email(param,"email_template.html")
    return {"link": f"https://drive.google.com/drive/folders/{response.drive_id}"}
@router.post('/send_prediction')
def sending_predicting_through_email(
    *,
    db: Session = Depends(deps.get_db),
    payload: EmailRes,
    current_user: User = Depends(deps.get_current_active_user),

) -> Any:
    response = ai_pred.get(db=db, id=payload.id)
    if not response:
        raise HTTPException(status_code=404, detail="Prediction not found")
    if response.drive_id == "None":
        data = predict_mail_services.create_figure(response,uuid.uuid4().hex)
        updated = {
            "id": response.id,
            "created_on": response.created_on,
            "path": response.path,
            "data": response.data,            
            "drive_id": data
        }
        ai_pred.update(db=db, db_obj=response, obj_in=updated)
    param = {      
        "path": response.path[7:],
        "created_on": response.created_on,  
        "link": f"https://drive.google.com/file/d/{response.drive_id}",
        "email": payload.email,
        "title":'Hasil Prediksi - JST.Padi'
    }        
    gmail_service.send_email(param,"email_template_prediction.html")
    return {"link": f"https://drive.google.com/file/d/{response.drive_id}"}
