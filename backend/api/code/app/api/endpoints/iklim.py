# api.py
from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.data.iklim import *
from app.services.user import user
from app.models.user import User
from app.api.deps import get_db
from app.api import deps
from app.services.exceptions import InfoException
from app.schemas.iklim_schema import *

router = APIRouter()

@router.get("/", response_model=List[Iklim])
def list_data_Iklim(
    db: Session = Depends(get_db),
    offset: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
):
    """
    Retrieve users.
    """    
    response = iklim.get_all_data(db,offset,limit)
    return response


# @router.get("/kota/{city}", response_model=List[Iklim])
# def list_data_Iklim_by_city(    
#     city : str,
#     db: Session = Depends(get_db),        
#     offset: int = 0,
#     limit: int = 100,    
#     current_user: User = Depends(deps.get_current_active_user),
# ):
#     """
#     Retrieve users.
#     """    
#     response = iklim.get_data_by_city(db,city,offset,limit)
#     return response

@router.get("/id/{id}", response_model=Iklim)
def get_data_Iklim_by_id(    
    *,
    db: Session = Depends(get_db),            
    id:int,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    response = iklim.get(db=db, id=id)
    if not response:
        raise HTTPException(status_code=404, detail="Item not found")
    return response


@router.delete("/id/{id}", response_model=Iklim)
def delete_data_Iklim(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """
    item = iklim.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item = iklim.remove(db=db, id=id)
    return item

@router.post("/", response_model=Iklim)
def add_data_Iklim(
    *,
    db: Session = Depends(deps.get_db),
    Iklim_in: IklimCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """

    exist = iklim.get_iklims(db=db,tahun=Iklim_in.tahun,stasiun=Iklim_in.stasiun)
    if exist:
        return HTTPException(
            status_code=403,detail="Exist"
        )
    try: 
        item = iklim.post_data_iklim(db=db,obj_in=Iklim_in)
        return item
    except:
        return HTTPException(
            status_code=403,detail="Exist"
        )

@router.put("/id/{id}", response_model=Iklim)
def update_data_Iklim(
    *,
    db: Session = Depends(deps.get_db),
    id:int,
    Iklim_in: IklimUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete an item.
    """
    item = iklim.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item = iklim.update(db=db,db_obj=item, obj_in=Iklim_in)
    return item
