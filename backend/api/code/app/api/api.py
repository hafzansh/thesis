from fastapi import APIRouter

from app.api.endpoints import login, users,padi,iklim,machine_learning,mail,services

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(padi.router, prefix="/padi", tags=["padi"])
api_router.include_router(iklim.router, prefix="/iklim", tags=["iklim"])
api_router.include_router(machine_learning.router, prefix="/model", tags=["machine_learning"])
api_router.include_router(mail.router, prefix="/mail", tags=["mail"])
api_router.include_router(services.router, prefix="/services", tags=["services"])