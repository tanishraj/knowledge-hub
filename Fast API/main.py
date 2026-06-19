from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI(title="Task API")


class TaskCreate(BaseModel):
    title:str = Field(min_length=3)
    description:Optional[str] = None
    completed:bool = False
    
class TaskUpdate(BaseModel):
    title:Optional[str] = Field(default = None, min_length=3)
    description:Optional[str] = None
    completed:bool = False
    
class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    
TASKS:list[dict] = []
NEXT_ID = 1

@app.get("/tasks", response_model=list[TaskResponse])
def list_tasks():
    return TASKS

@app.post("/tasks", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
def create_task(task: TaskCreate):
    global NEXT_ID
    new_task = {
        "id": NEXT_ID,
        "title": task.title,
        "description": task.description,
        "completed": task.completed
    }
    TASKS.append(new_task)
    NEXT_ID += 1
    return new_task

@app.get("/task/{task_id}", response_model=TaskResponse)
def get_task(task_id: int):
    for task in TASKS:
        if task["id"] == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found.")
            
@app.patch("/task/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task_update: TaskUpdate):
    for task in TASKS:
        if task["id"] == task_id:
            update_data = task_update.model_dump(exclude_unset=True)
            task.update(update_data)
            return task
    raise HTTPException(status_code=404, detail="Task not found.")

@app.delete('/task/{task_id}', response_model=TaskResponse, status_code=status.HTTP_200_OK)
def delete_task(task_id: int):
    for index, task in enumerate(TASKS):
        if task["id"] == task_id:
            TASKS.pop(index)
            return task
    raise HTTPException(status_code=404, detail="Task not found.")

