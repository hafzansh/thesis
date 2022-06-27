# api.py
from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.data.padi import *
from app.services.user import user
from app.models.user import User
from app.api.deps import get_db
from app.api import deps
from app.services.exceptions import InfoException
from app.schemas.padi_schema import *

router = APIRouter()

@router.get("/", response_model=List[Padi])
def list_data_padi(
    db: Session = Depends(get_db),
    offset: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Retrieve users.
    """    
    response = padi.get_all_data(db,offset,limit)
    return response

@router.get("/kota/{city}", response_model=List[Padi])
def list_data_padi_by_city(    
    city : str,
    db: Session = Depends(get_db),        
    offset: int = 0,
    limit: int = 100,    
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Retrieve users.
    """    
    response = padi.get_data_by_city(db,city,offset,limit)
    return response

@router.get("/id/{id}", response_model=Padi)
def get_data_padi_by_id(    
    *,
    db: Session = Depends(get_db),            
    id:int,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    response = padi.get(db=db, id=id)
    if not response:
        raise HTTPException(status_code=404, detail="Item not found")
    return response


@router.delete("/id/{id}", response_model=Padi)
def delete_data_padi(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """
    item = padi.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item = padi.remove(db=db, id=id)
    return item

@router.post("/", response_model=Padi)
def add_data_padi(
    *,
    db: Session = Depends(deps.get_db),
    padi_in: PadiCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """
    item = padi.post_data_padi(db=db, obj_in=padi_in)
    return item

@router.put("/id/{id}", response_model=Padi)
def update_data_padi(
    *,
    db: Session = Depends(deps.get_db),
    id:int,
    padi_in: PadiUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """
    item = padi.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item = padi.update(db=db,db_obj=item, obj_in=padi_in)
    return item
