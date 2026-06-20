# Task Manager API - Python FastAPI

A beginner-friendly REST API built with **Python** and **FastAPI**.

This project teaches the basic backend development flow using a simple **Task Manager API**. You will learn how to create, read, update, and delete tasks using HTTP methods like `GET`, `POST`, `PATCH`, and `DELETE`.

---

## Table of Contents

1. [What This Project Does](#what-this-project-does)
2. [What You Will Learn](#what-you-will-learn)
3. [Prerequisites](#prerequisites)
4. [Backend Basics](#backend-basics)
5. [Project Setup](#project-setup)
6. [Create a Virtual Environment](#create-a-virtual-environment)
7. [Activate the Virtual Environment](#activate-the-virtual-environment)
8. [Install Dependencies](#install-dependencies)
9. [Project Structure](#project-structure)
10. [Complete Code](#complete-code)
11. [Run the API](#run-the-api)
12. [Open API Documentation](#open-api-documentation)
13. [API Endpoints](#api-endpoints)
14. [How the Code Works](#how-the-code-works)
15. [Testing the API](#testing-the-api)
16. [Common Errors and Fixes](#common-errors-and-fixes)
17. [Important Notes](#important-notes)
18. [Next Steps](#next-steps)

---

## What This Project Does

This API allows users to manage tasks.

You can:

- Create a task
- Get all tasks
- Get a single task by ID
- Update a task
- Delete a task

Example task:

```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "description": "Build a beginner API",
  "completed": false
}
```

---

## What You Will Learn

By building this project, you will learn:

- What an API is
- What backend development means
- How HTTP methods work
- How to create routes in FastAPI
- How to accept request data
- How to return response data
- How to validate data using Pydantic
- How to use status codes
- How to handle errors
- How to run a FastAPI server using Uvicorn
- How to test APIs using Swagger UI

---

## Prerequisites

You should already know basic Python:

- Variables
- Functions
- Lists
- Dictionaries
- Loops
- Classes basics
- Type hints basics

You should have Python installed.

Check your Python version:

```bash
python3 --version
```

Recommended version:

```text
Python 3.10 or above
```

Why Python 3.10+?

Because this project uses syntax like:

```python
str | None
```

This syntax works in Python 3.10 and above.

If you are using Python 3.9, use this style instead:

```python
from typing import Optional

description: Optional[str] = None
```

---

## Backend Basics

### What is Backend?

The backend is the part of an application that runs on the server.

It usually handles:

- Business logic
- Database operations
- Authentication
- APIs
- File uploads
- Security
- Communication with frontend

Example:

```text
Frontend: React app
Backend: FastAPI app
Database: PostgreSQL / SQLite / MongoDB
```

The frontend sends a request to the backend, and the backend sends a response.

---

### What is an API?

API means **Application Programming Interface**.

In simple words:

> An API is a way for two applications to communicate with each other.

Example:

A React frontend asks the backend:

```text
Give me all tasks
```

The backend returns:

```json
[
  {
    "id": 1,
    "title": "Learn FastAPI",
    "completed": false
  }
]
```

---

### Common HTTP Methods

| Method | Meaning | Example |
|---|---|---|
| `GET` | Read data | Get all tasks |
| `POST` | Create data | Create a new task |
| `PATCH` | Partially update data | Update task title only |
| `PUT` | Replace full data | Replace entire task |
| `DELETE` | Delete data | Delete a task |

---

### Common HTTP Status Codes

| Status Code | Meaning |
|---|---|
| `200` | Success |
| `201` | Created successfully |
| `204` | Deleted successfully, no response body |
| `400` | Bad request |
| `404` | Not found |
| `422` | Validation error |
| `500` | Server error |

---

## Project Setup

Create a folder for your project:

```bash
mkdir task-manager-api
cd task-manager-api
```

---

## Create a Virtual Environment

A virtual environment keeps project packages separate from other Python projects.

Create virtual environment:

```bash
python3 -m venv .venv
```

This creates a folder:

```text
.venv/
```

That folder stores the Python environment and installed packages for this project.

---

## Activate the Virtual Environment

### macOS / Linux

```bash
source .venv/bin/activate
```

After activation, your terminal should show:

```text
(.venv)
```

Example:

```text
(.venv) tanish@MacBook task-manager-api %
```

### Windows

```bash
.venv\Scripts\activate
```

---

## Install Dependencies

Install FastAPI:

```bash
python -m pip install "fastapi[standard]"
```

This installs FastAPI and the standard tools needed to run the app.

You can check installed packages:

```bash
python -m pip list
```

Save packages to `requirements.txt`:

```bash
python -m pip freeze > requirements.txt
```

Install packages later from `requirements.txt`:

```bash
python -m pip install -r requirements.txt
```

---

## Project Structure

For this beginner project, keep it simple:

```text
task-manager-api/
├── main.py
├── requirements.txt
├── README.md
└── .venv/
```

Explanation:

| File / Folder | Purpose |
|---|---|
| `main.py` | Main FastAPI application file |
| `requirements.txt` | List of installed Python packages |
| `README.md` | Project documentation |
| `.venv/` | Virtual environment folder |

Do not push `.venv` to GitHub.

Add this to `.gitignore`:

```gitignore
.venv/
__pycache__/
*.pyc
```

---

## Complete Code

Create a file named:

```text
main.py
```

Add this code:

```python
from fastapi import FastAPI, HTTPException, Response, status
from pydantic import BaseModel, Field

app = FastAPI(title="Task API")


class TaskCreate(BaseModel):
    title: str = Field(min_length=3)
    description: str | None = None
    completed: bool = False


class TaskUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3)
    description: str | None = None
    completed: bool | None = None


class TaskResponse(BaseModel):
    id: int
    title: str
    description: str | None
    completed: bool


TASKS: list[dict] = []
NEXT_ID = 1


@app.get("/")
def home():
    return {"message": "Welcome to Task Manager API"}


@app.get("/tasks", response_model=list[TaskResponse])
def list_tasks():
    return TASKS


@app.post(
    "/tasks",
    response_model=TaskResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_task(task: TaskCreate):
    global NEXT_ID

    new_task = {
        "id": NEXT_ID,
        "title": task.title,
        "description": task.description,
        "completed": task.completed,
    }

    TASKS.append(new_task)
    NEXT_ID += 1

    return new_task


@app.get("/tasks/{task_id}", response_model=TaskResponse)
def get_task(task_id: int):
    for task in TASKS:
        if task["id"] == task_id:
            return task

    raise HTTPException(status_code=404, detail="Task not found.")


@app.patch("/tasks/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task_update: TaskUpdate):
    for task in TASKS:
        if task["id"] == task_id:
            update_data = task_update.model_dump(exclude_unset=True)
            task.update(update_data)
            return task

    raise HTTPException(status_code=404, detail="Task not found.")


@app.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int):
    for index, task in enumerate(TASKS):
        if task["id"] == task_id:
            TASKS.pop(index)
            return Response(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail="Task not found.")
```

---

## Run the API

Run this command from the same folder where `main.py` exists:

```bash
uvicorn main:app --reload
```

Meaning:

```text
main → main.py file
app  → FastAPI app variable inside main.py
--reload → restart server automatically when code changes
```

If your file is named `server.py`, run:

```bash
uvicorn server:app --reload
```

If your FastAPI variable is named `api`, run:

```bash
uvicorn main:api --reload
```

Expected output:

```text
Uvicorn running on http://127.0.0.1:8000
```

Open in browser:

```text
http://127.0.0.1:8000
```

---

## Open API Documentation

FastAPI automatically creates API documentation.

Open Swagger UI:

```text
http://127.0.0.1:8000/docs
```

Open ReDoc:

```text
http://127.0.0.1:8000/redoc
```

Swagger UI is very useful for beginners because you can test APIs directly from the browser.

---

## API Endpoints

### 1. Home Route

```http
GET /
```

Response:

```json
{
  "message": "Welcome to Task Manager API"
}
```

---

### 2. Get All Tasks

```http
GET /tasks
```

Response:

```json
[
  {
    "id": 1,
    "title": "Learn FastAPI",
    "description": "Build a task manager API",
    "completed": false
  }
]
```

---

### 3. Create a Task

```http
POST /tasks
```

Request body:

```json
{
  "title": "Learn FastAPI",
  "description": "Build a beginner project",
  "completed": false
}
```

Response status:

```text
201 Created
```

Response body:

```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "description": "Build a beginner project",
  "completed": false
}
```

---

### 4. Get Single Task

```http
GET /tasks/1
```

Response:

```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "description": "Build a beginner project",
  "completed": false
}
```

If task does not exist:

```json
{
  "detail": "Task not found."
}
```

Status code:

```text
404 Not Found
```

---

### 5. Update a Task

```http
PATCH /tasks/1
```

Request body:

```json
{
  "completed": true
}
```

Response:

```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "description": "Build a beginner project",
  "completed": true
}
```

This is a partial update. You only send the fields you want to change.

---

### 6. Delete a Task

```http
DELETE /tasks/1
```

Response status:

```text
204 No Content
```

There is no response body for `204`.

---

## How the Code Works

### Importing FastAPI

```python
from fastapi import FastAPI, HTTPException, Response, status
```

This imports FastAPI tools.

| Import | Purpose |
|---|---|
| `FastAPI` | Creates the app |
| `HTTPException` | Sends error responses |
| `Response` | Sends custom responses |
| `status` | Provides readable status code names |

---

### Creating the App

```python
app = FastAPI(title="Task API")
```

This creates the FastAPI application.

The `title` appears in Swagger documentation.

---

### Pydantic Models

Pydantic models define and validate data.

#### TaskCreate

Used when creating a task.

```python
class TaskCreate(BaseModel):
    title: str = Field(min_length=3)
    description: str | None = None
    completed: bool = False
```

Rules:

- `title` is required
- `title` must have at least 3 characters
- `description` is optional
- `completed` is optional and defaults to `False`

---

#### TaskUpdate

Used when updating a task.

```python
class TaskUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3)
    description: str | None = None
    completed: bool | None = None
```

All fields are optional because `PATCH` means partial update.

---

#### TaskResponse

Used when returning a task from the API.

```python
class TaskResponse(BaseModel):
    id: int
    title: str
    description: str | None
    completed: bool
```

This controls the shape of the response.

---

### Temporary In-Memory Storage

```python
TASKS: list[dict] = []
NEXT_ID = 1
```

This stores tasks inside a Python list.

Important:

> This is temporary storage. If you restart the server, all tasks will be lost.

Later, you should replace this with a database like SQLite or PostgreSQL.

---

### Creating a Task

```python
@app.post("/tasks", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
def create_task(task: TaskCreate):
```

This route accepts task data from the request body.

FastAPI automatically validates the body using `TaskCreate`.

Example request:

```json
{
  "title": "Learn FastAPI"
}
```

FastAPI converts that JSON into a Python object:

```python
task.title
```

---

### Updating a Task

```python
update_data = task_update.model_dump(exclude_unset=True)
```

This converts the Pydantic model into a dictionary.

`exclude_unset=True` means:

> Only include fields that the user actually sent.

Example request:

```json
{
  "completed": true
}
```

Then `update_data` becomes:

```python
{
    "completed": True
}
```

Then this line updates the task:

```python
task.update(update_data)
```

---

### Deleting a Task

```python
@app.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
```

`204 No Content` means the delete was successful, but no response body is returned.

That is why we return:

```python
return Response(status_code=status.HTTP_204_NO_CONTENT)
```

---

## Testing the API

### Test using Swagger UI

1. Run the server:

```bash
uvicorn main:app --reload
```

2. Open:

```text
http://127.0.0.1:8000/docs
```

3. Try endpoints in this order:

```text
POST /tasks
GET /tasks
GET /tasks/{task_id}
PATCH /tasks/{task_id}
DELETE /tasks/{task_id}
```

---

### Test using curl

#### Create task

```bash
curl -X POST "http://127.0.0.1:8000/tasks" \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn FastAPI","description":"Build API","completed":false}'
```

#### Get all tasks

```bash
curl "http://127.0.0.1:8000/tasks"
```

#### Get one task

```bash
curl "http://127.0.0.1:8000/tasks/1"
```

#### Update task

```bash
curl -X PATCH "http://127.0.0.1:8000/tasks/1" \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

#### Delete task

```bash
curl -X DELETE "http://127.0.0.1:8000/tasks/1"
```

---

## Common Errors and Fixes

### Error: `zsh: command not found: pip`

Use:

```bash
python3 -m pip install package-name
```

Inside virtual environment, use:

```bash
python -m pip install package-name
```

---

### Error: `ModuleNotFoundError: No module named fastapi`

FastAPI is not installed in the active environment.

Fix:

```bash
source .venv/bin/activate
python -m pip install "fastapi[standard]"
```

---

### Error: `description: str | None = None` is not working

You are probably using Python 3.9 or lower.

Fix 1: Upgrade to Python 3.10+.

Fix 2: Use `Optional`:

```python
from typing import Optional

description: Optional[str] = None
```

---

### Error: `Address already in use`

Another server is already running on port `8000`.

Fix:

```bash
uvicorn main:app --reload --port 8001
```

Open:

```text
http://127.0.0.1:8001/docs
```

---

### Folder Created: `__pycache__`

This is normal.

Python creates `__pycache__` to store compiled cache files.

You can delete it safely:

```bash
rm -rf __pycache__
```

But Python will create it again when you run the app.

Add it to `.gitignore`:

```gitignore
__pycache__/
*.pyc
```

---

## Important Notes

### This project does not use a database yet

Right now tasks are stored in memory:

```python
TASKS: list[dict] = []
```

That means:

- Data exists only while the server is running
- Data is lost when the server restarts
- This is okay for beginner learning

Next step is to add a database.

---

### This project does not have authentication yet

Anyone can create, update, or delete tasks.

Later, you can add:

- User registration
- Login
- Password hashing
- JWT token authentication
- Protected routes

---

### This project is beginner-friendly, not production-ready

Before using in production, you should add:

- Database
- Authentication
- Environment variables
- Logging
- Tests
- Error handling improvements
- Docker
- Deployment setup

---

## Next Steps

After completing this project, learn these topics in order:

1. SQLite database
2. SQLModel or SQLAlchemy
3. Project folder structure
4. Dependency injection using `Depends`
5. Environment variables
6. JWT authentication
7. Password hashing
8. Testing with `pytest`
9. CORS for frontend connection
10. Docker deployment

Recommended next project:

```text
Task Manager API with SQLite Database and JWT Login
```

---

## Useful Commands

### Create virtual environment

```bash
python3 -m venv .venv
```

### Activate virtual environment

```bash
source .venv/bin/activate
```

### Install FastAPI

```bash
python -m pip install "fastapi[standard]"
```

### Save dependencies

```bash
python -m pip freeze > requirements.txt
```

### Install dependencies

```bash
python -m pip install -r requirements.txt
```

### Run server

```bash
uvicorn main:app --reload
```

### Stop server

Press:

```text
CTRL + C
```

### Deactivate virtual environment

```bash
deactivate
```

---

## Official References

- FastAPI Documentation: https://fastapi.tiangolo.com/
- FastAPI Tutorial: https://fastapi.tiangolo.com/tutorial/
- Response Model: https://fastapi.tiangolo.com/tutorial/response-model/
- Response Status Code: https://fastapi.tiangolo.com/tutorial/response-status-code/
- Uvicorn Documentation: https://www.uvicorn.org/

---

## Summary

You have built a simple backend API using FastAPI.

You learned:

- How to create API routes
- How to validate request data
- How to return response data
- How to handle errors
- How to use HTTP status codes
- How to run a backend server
- How to test APIs using Swagger UI

This is your first step toward backend development with Python.

