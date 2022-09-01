import json
from datetime import datetime
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from app.services.machine_learn.ml_training import ml_model
from app.services.machine_learn.ml_services import ai_model, ai_pred
from app.services.machine_learn.ml_predict import predict_model
from app.services.data.padi import *
from app.services.mail.mail_services import mail_services
from app.models.user import User
from app.api import deps
from app.models.ai_model import *
from app.models.ai_predict import *
from app.schemas.ai_model_schema import *
from app.schemas.ai_predict_schema import *
from app.schemas.ai_predicts_schema import *
from app.services.google.gdrive_services import gdrive_service
from fastapi import BackgroundTasks
from app.services.mail.service import send_email_async, send_email_background
from app.services.google.gmail_services import gmail_service
router = APIRouter()
@router.get('/create_report')
def create_report(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
) -> Any:
    response = ai_model.get(db=db, id=id)
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
        ai_model.update(db=db,db_obj=response,obj_in=updated)
    param = {
            "title": "Model Data",
            "name": "JST Padi",
            "link": f"https://drive.google.com/drive/folders/{response.drive_id}"
        }
    gmail_service.send_email(param)        
    return response.drive_id
@router.get('/send-email/asynchronous')
async def send_email_asynchronous():
    body = {
        "title": "Hello World",
        "name": "John Doe"
        }
    await send_email_async('Hello World','muhammadhafiez86@gmail.com',body
    )
    return {"detail":"success"}
@router.get('/send-email/backgroundtasks')
def send_email_backgroundtasks(background_tasks: BackgroundTasks):
    send_email_background(background_tasks, 'Hello World',   
    'muhammadhafiez86@gmail.com', {'title': 'Hello World', 'name' :'John Doe'})
    return 'Success'    
@router.get('/send-email/gmail-api')
def send_email_asynchronous():
    gmail_service.send_email()
    return 'Success'        