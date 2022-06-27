import secrets
from typing import Any, Dict, List, Optional, Union
from sqlalchemy.engine.url import URL
from pydantic import AnyHttpUrl, BaseSettings, EmailStr, HttpUrl, validator

class Settings(BaseSettings):
    PROJECT_NAME: str = "JST Padi Backend"
    API_V1_STR: str = "/api"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = [
        "http://localhost:3000"
    ]

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)
    
    config = dict(
        drivername='mysql',
        username='root',
        password='root',
        host='127.0.0.1',
        port='3306',
        database='jst_padi'
    )
    SQLALCHEMY_DATABASE_URI = URL.create(**config)

    USERS_OPEN_REGISTRATION: bool = True
    
settings = Settings()    