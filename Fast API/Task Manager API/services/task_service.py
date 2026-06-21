from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from models.task import Task
from schemas.task import TaskCreate, TaskUpdate


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