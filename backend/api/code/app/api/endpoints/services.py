from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.user import User
from fastapi.responses import JSONResponse
from app.api import deps
import os, shutil

router = APIRouter()

@router.post("/clear_trash",)
async def delete_temporary_files(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
):
    folder = 'temp/'
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            raise HTTPException(
                status_code=500, detail=f"{e}"
            )
    return JSONResponse(status_code=200,content={
        "detail": "success"
    })
