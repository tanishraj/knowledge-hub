from fastapi import FastAPI

from database import Base, engine
from models.task import Task
from models.user import User
from routers import auth, tasks, users


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