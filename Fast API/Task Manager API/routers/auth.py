from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from core.security import create_access_token
from database import get_db
from schemas.auth import LoginRequest, TokenResponse
from schemas.user import UserCreate, UserResponse
from services.auth_service import authenticate_user, register_user


router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(
    user_data: UserCreate,
    db: Session = Depends(get_db),
):
    return register_user(db, user_data)


@router.post("/login", response_model=TokenResponse)
def login(
    login_data: LoginRequest,
    db: Session = Depends(get_db),
):
    user = authenticate_user(
        db,
        email=login_data.email,
        password=login_data.password,
    )

    access_token = create_access_token(data={"sub": str(user.id)})

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }