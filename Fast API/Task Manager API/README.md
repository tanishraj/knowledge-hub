# Task Manager API - Complete Step-by-Step Code Guide

A complete beginner-friendly FastAPI backend project.

This README is written as a **build-along guide**.  
Follow the steps in order and create each file one by one.

By the end, you will have:

- User registration
- User login
- Password hashing
- JWT token authentication
- Protected routes
- Task CRUD
- User-owned tasks
- Tests
- Dockerfile

---

# 1. Final API Features

## Public Routes

These routes do not need login:

| Method | Route | Purpose |
|---|---|---|
| GET | `/health` | Check API status |
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login user |

## Protected Routes

These routes need a valid token:

| Method | Route | Purpose |
|---|---|---|
| GET | `/me` | Get current user |
| GET | `/tasks` | List my tasks |
| POST | `/tasks` | Create my task |
| GET | `/tasks/{task_id}` | Get my task |
| PATCH | `/tasks/{task_id}` | Update my task |
| DELETE | `/tasks/{task_id}` | Delete my task |

---

# 2. API Rules

- Users can only see their own tasks.
- Users can only update their own tasks.
- Users can only delete their own tasks.
- Task title is required.
- Task priority can only be `low`, `medium`, or `high`.
- Password is never returned in API response.
- Password is never stored as plain text.
- Protected routes require JWT token.

---

# 3. Create Project Folder

```bash
mkdir "Task Manager API"
cd "Task Manager API"
```

---

# 4. Create Virtual Environment

```bash
python3 -m venv .venv
```

Activate it:

```bash
source .venv/bin/activate
```

You should see something like this:

```text
(.venv) tanishsingh@Tanishs-MBP Task Manager API %
```

---

# 5. Create Project Structure

Create this folder structure:

```text
app/
├── __init__.py
├── main.py
├── database.py
├── core/
│   ├── __init__.py
│   ├── config.py
│   └── security.py
├── models/
│   ├── __init__.py
│   ├── user.py
│   └── task.py
├── schemas/
│   ├── __init__.py
│   ├── user.py
│   ├── task.py
│   └── auth.py
├── routers/
│   ├── __init__.py
│   ├── auth.py
│   ├── users.py
│   └── tasks.py
├── services/
│   ├── __init__.py
│   ├── auth_service.py
│   └── task_service.py
└── tests/
    ├── __init__.py
    ├── conftest.py
    ├── test_auth.py
    └── test_tasks.py
```

You can create folders with:

```bash
mkdir -p app/core app/models app/schemas app/routers app/services app/tests
touch app/__init__.py
touch app/core/__init__.py
touch app/models/__init__.py
touch app/schemas/__init__.py
touch app/routers/__init__.py
touch app/services/__init__.py
touch app/tests/__init__.py
```

---

# 6. Create `requirements.txt`

Create a file:

```text
requirements.txt
```

Add this:

```txt
fastapi[standard]
sqlalchemy
pydantic-settings
passlib[bcrypt]
python-jose[cryptography]
email-validator
pytest
httpx
```

Install packages:

```bash
python -m pip install -r requirements.txt
```

---

# 7. Create `.gitignore`

Create a file:

```text
.gitignore
```

Add:

```gitignore
.venv/
__pycache__/
*.pyc
.env
task_manager.db
.pytest_cache/
```

Why?

These files should not go to GitHub.

---

# 8. Step 1 - Create Basic FastAPI App

File:

```text
app/main.py
```

Add:

```python
from fastapi import FastAPI

app = FastAPI(title="Task Manager API")


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Task Manager API is running",
    }
```

Run the app:

```bash
uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000/health
```

Expected response:

```json
{
  "status": "ok",
  "message": "Task Manager API is running"
}
```

Swagger docs:

```text
http://127.0.0.1:8000/docs
```

---

# 9. Step 2 - Add Configuration

File:

```text
app/core/config.py
```

Add:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Task Manager API"
    database_url: str = "sqlite:///./task_manager.db"
    secret_key: str = "change-this-secret-key"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
```

## What this does

This stores app settings in one place.

Later, you can create a `.env` file:

```env
APP_NAME=Task Manager API
DATABASE_URL=sqlite:///./task_manager.db
SECRET_KEY=my-real-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

# 10. Step 3 - Add Database Setup

File:

```text
app/database.py
```

Add:

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import settings


engine = create_engine(
    settings.database_url,
    connect_args={"check_same_thread": False},
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)

Base = declarative_base()


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
```

## What this does

This file creates:

| Code | Meaning |
|---|---|
| `engine` | Connection to database |
| `SessionLocal` | Creates database sessions |
| `Base` | Base class for database models |
| `get_db` | FastAPI dependency for DB access |

We are using SQLite for learning.

---

# 11. Step 4 - Create User Model

File:

```text
app/models/user.py
```

Add:

```python
from sqlalchemy import Column, DateTime, Integer, String, func
from sqlalchemy.orm import relationship

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String, unique=True, index=True, nullable=False)

    password_hash = Column(String, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    tasks = relationship("Task", back_populates="owner")
```

## Important

We store:

```text
password_hash
```

Not:

```text
password
```

Never store plain password.

---

# 12. Step 5 - Create Task Model

File:

```text
app/models/task.py
```

Add:

```python
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, func
from sqlalchemy.orm import relationship

from app.database import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String, nullable=True)

    completed = Column(Boolean, default=False, nullable=False)

    priority = Column(String, default="medium", nullable=False)

    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    owner = relationship("User", back_populates="tasks")
```

## What is `owner_id`?

`owner_id` connects a task to a user.

Example:

```text
User id = 1
Task owner_id = 1
```

This means task belongs to user 1.

---

# 13. Step 6 - Create User Schemas

File:

```text
app/schemas/user.py
```

Add:

```python
from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserCreate(BaseModel):
    name: str = Field(min_length=2)
    email: EmailStr
    password: str = Field(min_length=6)


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
```

## Important

`UserCreate` accepts password.

`UserResponse` does not return password.

That is intentional.

---

# 14. Step 7 - Create Auth Schemas

File:

```text
app/schemas/auth.py
```

Add:

```python
from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
```

---

# 15. Step 8 - Create Task Schemas

File:

```text
app/schemas/task.py
```

Add:

```python
from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class TaskPriority(str, Enum):
    low = "low"
    medium = "medium"
    high = "high"


class TaskCreate(BaseModel):
    title: str = Field(min_length=1)
    description: Optional[str] = None
    priority: TaskPriority = TaskPriority.medium


class TaskUpdate(BaseModel):
    title: Optional[str] = Field(default=None, min_length=1)
    description: Optional[str] = None
    completed: Optional[bool] = None
    priority: Optional[TaskPriority] = None


class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    priority: TaskPriority
    owner_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
```

## Why use Enum?

This makes sure priority can only be:

```text
low
medium
high
```

If user sends:

```json
{
  "priority": "urgent"
}
```

FastAPI will reject it automatically.

---

# 16. Step 9 - Add Security Helpers

File:

```text
app/core/security.py
```

Add:

```python
from datetime import datetime, timedelta, timezone
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.core.config import settings
from app.database import get_db
from app.models.user import User


password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

bearer_scheme = HTTPBearer()


def hash_password(password: str) -> str:
    return password_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return password_context.verify(plain_password, hashed_password)


def create_access_token(
    data: dict,
    expires_delta: Optional[timedelta] = None,
) -> str:
    to_encode = data.copy()

    if expires_delta is None:
        expires_delta = timedelta(minutes=settings.access_token_expire_minutes)

    expire = datetime.now(timezone.utc) + expires_delta

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        settings.secret_key,
        algorithm=settings.algorithm,
    )

    return encoded_jwt


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db),
) -> User:
    token = credentials.credentials

    unauthorized_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired token",
    )

    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=[settings.algorithm],
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise unauthorized_exception

    except JWTError:
        raise unauthorized_exception

    user = db.query(User).filter(User.id == int(user_id)).first()

    if user is None:
        raise unauthorized_exception

    return user
```

## What this file does

| Function | Purpose |
|---|---|
| `hash_password` | Convert password into secure hash |
| `verify_password` | Check password during login |
| `create_access_token` | Create JWT token |
| `get_current_user` | Read token and return logged-in user |

---

# 17. Step 10 - Create Auth Service

File:

```text
app/services/auth_service.py
```

Add:

```python
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import hash_password, verify_password
from app.models.user import User
from app.schemas.user import UserCreate


def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()


def register_user(db: Session, user_data: UserCreate) -> User:
    existing_user = get_user_by_email(db, user_data.email)

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    new_user = User(
        name=user_data.name,
        email=user_data.email,
        password_hash=hash_password(user_data.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def authenticate_user(db: Session, email: str, password: str) -> User:
    user = get_user_by_email(db, email)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    is_valid_password = verify_password(password, user.password_hash)

    if not is_valid_password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    return user
```

## Important

Login error message should be generic:

```text
Invalid email or password
```

Do not say:

```text
Email does not exist
```

or:

```text
Wrong password
```

Generic error is safer.

---

# 18. Step 11 - Create Task Service

File:

```text
app/services/task_service.py
```

Add:

```python
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.task import Task
from app.schemas.task import TaskCreate, TaskUpdate


def create_task(db: Session, task_data: TaskCreate, owner_id: int) -> Task:
    new_task = Task(
        title=task_data.title,
        description=task_data.description,
        priority=task_data.priority.value,
        owner_id=owner_id,
    )

    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task


def list_user_tasks(db: Session, owner_id: int) -> list[Task]:
    return db.query(Task).filter(Task.owner_id == owner_id).all()


def get_user_task(db: Session, task_id: int, owner_id: int) -> Task:
    task = (
        db.query(Task)
        .filter(Task.id == task_id, Task.owner_id == owner_id)
        .first()
    )

    if task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )

    return task


def update_task(
    db: Session,
    task_id: int,
    owner_id: int,
    task_data: TaskUpdate,
) -> Task:
    task = get_user_task(db, task_id, owner_id)

    update_data = task_data.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        if key == "priority" and value is not None:
            value = value.value

        setattr(task, key, value)

    db.commit()
    db.refresh(task)

    return task


def delete_task(db: Session, task_id: int, owner_id: int) -> None:
    task = get_user_task(db, task_id, owner_id)

    db.delete(task)
    db.commit()
```

## Ownership Check

Notice this filter:

```python
.filter(Task.id == task_id, Task.owner_id == owner_id)
```

This means:

```text
Find this task only if it belongs to current user.
```

So user 1 cannot access user 2's task.

---

# 19. Step 12 - Create Auth Router

File:

```text
app/routers/auth.py
```

Add:

```python
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.core.security import create_access_token
from app.database import get_db
from app.schemas.auth import LoginRequest, TokenResponse
from app.schemas.user import UserCreate, UserResponse
from app.services.auth_service import authenticate_user, register_user


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
```

---

# 20. Step 13 - Create Users Router

File:

```text
app/routers/users.py
```

Add:

```python
from fastapi import APIRouter, Depends

from app.core.security import get_current_user
from app.models.user import User
from app.schemas.user import UserResponse


router = APIRouter(tags=["Users"])


@router.get("/me", response_model=UserResponse)
def get_me(
    current_user: User = Depends(get_current_user),
):
    return current_user
```

## What `/me` does

It returns the currently logged-in user.

The backend knows the user from the token.

---

# 21. Step 14 - Create Tasks Router

File:

```text
app/routers/tasks.py
```

Add:

```python
from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.database import get_db
from app.models.user import User
from app.schemas.task import TaskCreate, TaskResponse, TaskUpdate
from app.services.task_service import (
    create_task,
    delete_task,
    get_user_task,
    list_user_tasks,
    update_task,
)


router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.get("", response_model=list[TaskResponse])
def list_tasks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return list_user_tasks(db, owner_id=current_user.id)


@router.post(
    "",
    response_model=TaskResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_new_task(
    task_data: TaskCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_task(db, task_data, owner_id=current_user.id)


@router.get("/{task_id}", response_model=TaskResponse)
def get_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_user_task(db, task_id, owner_id=current_user.id)


@router.patch("/{task_id}", response_model=TaskResponse)
def update_existing_task(
    task_id: int,
    task_data: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return update_task(
        db,
        task_id=task_id,
        owner_id=current_user.id,
        task_data=task_data,
    )


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_existing_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    delete_task(db, task_id=task_id, owner_id=current_user.id)

    return Response(status_code=status.HTTP_204_NO_CONTENT)
```

---

# 22. Step 15 - Update Main App

Now update:

```text
app/main.py
```

Replace old code with:

```python
from fastapi import FastAPI

from app.database import Base, engine
from app.models.task import Task
from app.models.user import User
from app.routers import auth, tasks, users


Base.metadata.create_all(bind=engine)


app = FastAPI(title="Task Manager API")


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Task Manager API is running",
    }


app.include_router(auth.router)
app.include_router(users.router)
app.include_router(tasks.router)
```

## Why import `Task` and `User`?

These imports make sure SQLAlchemy knows about your database models before creating tables.

---

# 23. Run the App

Run:

```bash
uvicorn app.main:app --reload
```

Open Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# 24. Test API Manually in Swagger

## Step A: Health Check

Open:

```text
GET /health
```

Click:

```text
Try it out
Execute
```

Expected:

```json
{
  "status": "ok",
  "message": "Task Manager API is running"
}
```

---

## Step B: Register User

Endpoint:

```http
POST /auth/register
```

Request:

```json
{
  "name": "Tanish",
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Expected response:

```json
{
  "id": 1,
  "name": "Tanish",
  "email": "tanish@example.com",
  "created_at": "2026-06-20T10:00:00"
}
```

Notice password is not returned.

---

## Step C: Login User

Endpoint:

```http
POST /auth/login
```

Request:

```json
{
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Expected response:

```json
{
  "access_token": "long-token-here",
  "token_type": "bearer"
}
```

Copy the token.

---

## Step D: Authorize in Swagger

In Swagger UI:

1. Click **Authorize**
2. Paste only the token value
3. Click **Authorize**
4. Close the modal

Now protected routes should work.

If Swagger asks for the full value, use:

```text
Bearer your-token-here
```

---

## Step E: Get Current User

Endpoint:

```http
GET /me
```

Expected response:

```json
{
  "id": 1,
  "name": "Tanish",
  "email": "tanish@example.com",
  "created_at": "2026-06-20T10:00:00"
}
```

---

## Step F: Create Task

Endpoint:

```http
POST /tasks
```

Request:

```json
{
  "title": "Learn FastAPI Auth",
  "description": "Understand JWT and protected routes",
  "priority": "high"
}
```

Expected response:

```json
{
  "id": 1,
  "title": "Learn FastAPI Auth",
  "description": "Understand JWT and protected routes",
  "completed": false,
  "priority": "high",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T10:00:00"
}
```

---

## Step G: List Tasks

Endpoint:

```http
GET /tasks
```

Expected response:

```json
[
  {
    "id": 1,
    "title": "Learn FastAPI Auth",
    "description": "Understand JWT and protected routes",
    "completed": false,
    "priority": "high",
    "owner_id": 1,
    "created_at": "2026-06-20T10:00:00",
    "updated_at": "2026-06-20T10:00:00"
  }
]
```

---

## Step H: Update Task

Endpoint:

```http
PATCH /tasks/1
```

Request:

```json
{
  "completed": true
}
```

Expected response:

```json
{
  "id": 1,
  "title": "Learn FastAPI Auth",
  "description": "Understand JWT and protected routes",
  "completed": true,
  "priority": "high",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T11:00:00"
}
```

---

## Step I: Delete Task

Endpoint:

```http
DELETE /tasks/1
```

Expected status:

```text
204 No Content
```

There should be no response body.

---

# 25. How to Test with curl

## Register

```bash
curl -X POST "http://127.0.0.1:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tanish",
    "email": "tanish@example.com",
    "password": "secret123"
  }'
```

## Login

```bash
curl -X POST "http://127.0.0.1:8000/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "tanish@example.com",
    "password": "secret123"
  }'
```

Copy the token and save it:

```bash
TOKEN="paste-your-token-here"
```

## Get Me

```bash
curl "http://127.0.0.1:8000/me" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Task

```bash
curl -X POST "http://127.0.0.1:8000/tasks" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Learn FastAPI",
    "description": "Build Task Manager API",
    "priority": "medium"
  }'
```

## List Tasks

```bash
curl "http://127.0.0.1:8000/tasks" \
  -H "Authorization: Bearer $TOKEN"
```

## Update Task

```bash
curl -X PATCH "http://127.0.0.1:8000/tasks/1" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "completed": true
  }'
```

## Delete Task

```bash
curl -X DELETE "http://127.0.0.1:8000/tasks/1" \
  -H "Authorization: Bearer $TOKEN"
```

---

# 26. Add Tests

Testing is optional at first, but very useful.

---

## Create Test Config

File:

```text
app/tests/conftest.py
```

Add:

```python
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.database import Base, get_db
from app.main import app


TEST_DATABASE_URL = "sqlite://"

test_engine = create_engine(
    TEST_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)

TestingSessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=test_engine,
)


@pytest.fixture()
def client():
    Base.metadata.create_all(bind=test_engine)

    def override_get_db():
        db = TestingSessionLocal()

        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db

    with TestClient(app) as test_client:
        yield test_client

    app.dependency_overrides.clear()
    Base.metadata.drop_all(bind=test_engine)


def register_user(client, email="tanish@example.com"):
    return client.post(
        "/auth/register",
        json={
            "name": "Tanish",
            "email": email,
            "password": "secret123",
        },
    )


def login_user(client, email="tanish@example.com"):
    return client.post(
        "/auth/login",
        json={
            "email": email,
            "password": "secret123",
        },
    )


def get_auth_headers(client, email="tanish@example.com"):
    register_user(client, email=email)

    response = login_user(client, email=email)

    token = response.json()["access_token"]

    return {"Authorization": f"Bearer {token}"}
```

---

## Create Auth Tests

File:

```text
app/tests/test_auth.py
```

Add:

```python
def test_health_check(client):
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_register_user(client):
    response = client.post(
        "/auth/register",
        json={
            "name": "Tanish",
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    data = response.json()

    assert response.status_code == 201
    assert data["name"] == "Tanish"
    assert data["email"] == "tanish@example.com"
    assert "password" not in data
    assert "password_hash" not in data


def test_cannot_register_same_email_twice(client):
    client.post(
        "/auth/register",
        json={
            "name": "Tanish",
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    response = client.post(
        "/auth/register",
        json={
            "name": "Another User",
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    assert response.status_code == 400


def test_login_user(client):
    client.post(
        "/auth/register",
        json={
            "name": "Tanish",
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    response = client.post(
        "/auth/login",
        json={
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    data = response.json()

    assert response.status_code == 200
    assert "access_token" in data
    assert data["token_type"] == "bearer"


def test_login_fails_with_wrong_password(client):
    client.post(
        "/auth/register",
        json={
            "name": "Tanish",
            "email": "tanish@example.com",
            "password": "secret123",
        },
    )

    response = client.post(
        "/auth/login",
        json={
            "email": "tanish@example.com",
            "password": "wrongpassword",
        },
    )

    assert response.status_code == 401


def test_me_requires_token(client):
    response = client.get("/me")

    assert response.status_code == 403
```

---

## Create Task Tests

File:

```text
app/tests/test_tasks.py
```

Add:

```python
from app.tests.conftest import get_auth_headers


def test_create_task(client):
    headers = get_auth_headers(client)

    response = client.post(
        "/tasks",
        headers=headers,
        json={
            "title": "Learn FastAPI",
            "description": "Build API",
            "priority": "high",
        },
    )

    data = response.json()

    assert response.status_code == 201
    assert data["title"] == "Learn FastAPI"
    assert data["completed"] is False
    assert data["priority"] == "high"


def test_cannot_create_task_without_token(client):
    response = client.post(
        "/tasks",
        json={
            "title": "Learn FastAPI",
            "description": "Build API",
            "priority": "high",
        },
    )

    assert response.status_code == 403


def test_list_only_current_user_tasks(client):
    user_one_headers = get_auth_headers(client, email="one@example.com")
    user_two_headers = get_auth_headers(client, email="two@example.com")

    client.post(
        "/tasks",
        headers=user_one_headers,
        json={
            "title": "User One Task",
            "priority": "high",
        },
    )

    client.post(
        "/tasks",
        headers=user_two_headers,
        json={
            "title": "User Two Task",
            "priority": "low",
        },
    )

    response = client.get("/tasks", headers=user_one_headers)

    data = response.json()

    assert response.status_code == 200
    assert len(data) == 1
    assert data[0]["title"] == "User One Task"


def test_update_own_task(client):
    headers = get_auth_headers(client)

    create_response = client.post(
        "/tasks",
        headers=headers,
        json={
            "title": "Learn FastAPI",
            "priority": "medium",
        },
    )

    task_id = create_response.json()["id"]

    update_response = client.patch(
        f"/tasks/{task_id}",
        headers=headers,
        json={
            "completed": True,
        },
    )

    data = update_response.json()

    assert update_response.status_code == 200
    assert data["completed"] is True


def test_cannot_update_another_users_task(client):
    user_one_headers = get_auth_headers(client, email="one@example.com")
    user_two_headers = get_auth_headers(client, email="two@example.com")

    create_response = client.post(
        "/tasks",
        headers=user_one_headers,
        json={
            "title": "User One Task",
            "priority": "medium",
        },
    )

    task_id = create_response.json()["id"]

    update_response = client.patch(
        f"/tasks/{task_id}",
        headers=user_two_headers,
        json={
            "completed": True,
        },
    )

    assert update_response.status_code == 404


def test_delete_own_task(client):
    headers = get_auth_headers(client)

    create_response = client.post(
        "/tasks",
        headers=headers,
        json={
            "title": "Task to delete",
            "priority": "medium",
        },
    )

    task_id = create_response.json()["id"]

    delete_response = client.delete(f"/tasks/{task_id}", headers=headers)

    assert delete_response.status_code == 204

    get_response = client.get(f"/tasks/{task_id}", headers=headers)

    assert get_response.status_code == 404


def test_cannot_delete_another_users_task(client):
    user_one_headers = get_auth_headers(client, email="one@example.com")
    user_two_headers = get_auth_headers(client, email="two@example.com")

    create_response = client.post(
        "/tasks",
        headers=user_one_headers,
        json={
            "title": "User One Task",
            "priority": "medium",
        },
    )

    task_id = create_response.json()["id"]

    delete_response = client.delete(
        f"/tasks/{task_id}",
        headers=user_two_headers,
    )

    assert delete_response.status_code == 404
```

Run tests:

```bash
pytest
```

---

# 27. Dockerfile

Create:

```text
Dockerfile
```

Add:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build image:

```bash
docker build -t task-manager-api .
```

Run container:

```bash
docker run -p 8000:8000 task-manager-api
```

Open:

```text
http://127.0.0.1:8000/docs
```

---

# 28. Common Errors

## Error: `No module named app`

Make sure you run from project root:

```bash
uvicorn app.main:app --reload
```

Your terminal should be inside:

```text
Task Manager API/
```

Not inside:

```text
Task Manager API/app/
```

---

## Error: `zsh: command not found: pip`

Use:

```bash
python -m pip install -r requirements.txt
```

or:

```bash
python3 -m pip install -r requirements.txt
```

---

## Error: `python3 venv .venv`

Wrong:

```bash
python3 venv .venv
```

Correct:

```bash
python3 -m venv .venv
```

You need `-m`.

---

## Error: `str | None` not working

That syntax needs Python 3.10+.

This project uses:

```python
from typing import Optional
```

So it can work on older Python versions too.

---

## Error: password hash warning

If you see bcrypt/passlib warnings, first upgrade:

```bash
python -m pip install --upgrade passlib bcrypt
```

If you are using Python 3.14 and some package has issues, use Python 3.12 for this project.

---

## Error: database table missing

Delete old SQLite database and restart:

```bash
rm -f task_manager.db
uvicorn app.main:app --reload
```

---

# 29. Beginner Explanation of Auth Flow

## Register

User sends:

```json
{
  "name": "Tanish",
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Backend stores:

```text
name
email
password_hash
```

Backend does not store plain password.

---

## Login

User sends:

```json
{
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Backend:

1. Finds user by email.
2. Verifies password with password hash.
3. Creates JWT token.
4. Returns token.

---

## Protected Route

User sends token:

```http
Authorization: Bearer token_here
```

Backend:

1. Reads token.
2. Decodes token.
3. Gets user id from token.
4. Finds current user.
5. Allows request.

---

# 30. Beginner Explanation of Task Ownership

Every task has:

```text
owner_id
```

When user creates task, backend sets:

```python
owner_id=current_user.id
```

When user lists tasks, backend filters:

```python
Task.owner_id == current_user.id
```

When user updates/deletes task, backend checks:

```python
Task.id == task_id
Task.owner_id == current_user.id
```

This prevents users from accessing other users' tasks.

---

# 31. Final Checklist

```text
[ ] Virtual environment created
[ ] Packages installed
[ ] Health route works
[ ] Database file created
[ ] User model created
[ ] Task model created
[ ] Register works
[ ] Password is hashed
[ ] Login returns token
[ ] /me works with token
[ ] /tasks requires token
[ ] Create task works
[ ] List tasks returns only current user's tasks
[ ] Get task checks ownership
[ ] Update task checks ownership
[ ] Delete task checks ownership
[ ] Tests pass
[ ] Dockerfile works
```

---

# 32. Stretch Features

Add these later:

- Pagination
- Search by title
- Filter by completed status
- Due date
- Team/project support
- Role-based permissions
- Email verification
- Password reset

---

# 33. Suggested Build Order

Follow this order:

```text
1. Health route
2. Database connection
3. User model
4. Task model
5. User schemas
6. Task schemas
7. Password hashing
8. Register route
9. Login route
10. JWT creation
11. Current user dependency
12. /me route
13. Create task
14. List my tasks
15. Get my task
16. Update my task
17. Delete my task
18. Tests
19. Dockerfile
20. Deployment
```

Do not jump directly to JWT.

Build slowly and test each step in Swagger.

---

# 34. Final Run Command

```bash
uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000/docs
```

Then test in order:

```text
GET /health
POST /auth/register
POST /auth/login
Authorize
GET /me
POST /tasks
GET /tasks
GET /tasks/{task_id}
PATCH /tasks/{task_id}
DELETE /tasks/{task_id}
```

If this works, you have built a real backend API.
