from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app import models, schemas
from app.services.user import user as user_services
from app.api import deps
from app.core.config import settings

router = APIRouter()

@router.get("/", response_model=List[schemas.user_schema.User])
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.user.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve users.
    """
    users = user_services.get_multi(db, skip=skip, limit=limit)
    return users


@router.post("/", response_model=schemas.user_schema.User)
def create_user(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.user_schema.UserCreate,
    current_user: models.user.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Create new user.
    """
    user = user_services.get_by_username(db, username=user_in.username)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )
    user = user_services.create(db, obj_in=user_in)
    return user


@router.put("/me", response_model=schemas.user_schema.User)
def update_user_me(
    *,
    db: Session = Depends(deps.get_db),
    password: str = Body(None),
    full_name: str = Body(None),
    username: str = Body(None),
    current_user: models.user.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Update own user.
    """
    current_user_data = jsonable_encoder(current_user)
    user_in = schemas.user_schema.UserUpdate(**current_user_data)
    if password is not None:
        user_in.password = password
    if full_name is not None:
        user_in.full_name = full_name
    if username is not None:
        user_in.username = username
    user = user_services.update(db, db_obj=current_user, obj_in=user_in)
    return user


@router.get("/me", response_model=schemas.user_schema.User)
def read_user_me(
    db: Session = Depends(deps.get_db),
    current_user: models.user.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get current user.
    """
    return current_user


@router.post("/open", response_model=schemas.user_schema.User)
def create_user_open(
    *,
    db: Session = Depends(deps.get_db),
    password: str = Body(...),
    username: str = Body(...),
    full_name: str = Body(None),
) -> Any:
    """
    Create new user without the need to be logged in.
    """
    if not settings.USERS_OPEN_REGISTRATION:
        raise HTTPException(
            status_code=403,
            detail="Open user registration is forbidden on this server",
        )
    user = user_services.get_by_username(db, username=username)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system",
        )
    user_in = schemas.user_schema.UserCreate(password=password, username=username, full_name=full_name)
    user = user_services.create(db, obj_in=user_in)
    return user


@router.get("/{user_id}", response_model=schemas.user_schema.User)
def read_user_by_id(
    user_id: int,
    current_user: models.user.User = Depends(deps.get_current_active_user),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific user by id.
    """
    user = user_services.get(db, id=user_id)
    if user == current_user:
        return user
    if not user_services.is_superuser(current_user):
        raise HTTPException(
            status_code=400, detail="The user doesn't have enough privileges"
        )
    return user


@router.put("/{user_id}", response_model=schemas.user_schema.User)
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    user_in: schemas.user_schema.UserUpdate,
    current_user: models.user.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Update a user.
    """
    user = user_services.get(db, id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this username does not exist in the system",
        )
    user = user_services.update(db, db_obj=user, obj_in=user_in)
    return user

@router.delete("/{user_id}")
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    current_user: models.user.User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Delete a user.
    """
    user = user_services.get(db, id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this username does not exist in the system",
        )
    user = user_services.remove(db,id=user_id)
    return user