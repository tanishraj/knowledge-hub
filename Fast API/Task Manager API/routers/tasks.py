from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from core.security import get_current_user
from database import get_db
from models.user import User
from schemas.task import TaskCreate, TaskResponse, TaskUpdate
from services.task_service import (
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