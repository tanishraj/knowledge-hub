# Task Manager API - Python FastAPI

A beginner-friendly backend project built with **FastAPI**.

This project is designed as the **final project after learning FastAPI basics**.  
It teaches you how real backend applications are structured: authentication, database models, protected routes, ownership rules, and API testing.

---

## Project Goal

Build a backend API where users can:

- Register an account
- Login with email and password
- Receive a JWT access token
- Create their own tasks
- View only their own tasks
- Update only their own tasks
- Delete only their own tasks

This is a very common real-world backend pattern.

Examples:

- Todo app backend
- Project management backend
- Notes app backend
- Issue tracker backend
- Personal productivity backend

---

## What You Will Learn

By building this project, you will learn:

- FastAPI app structure
- API routing
- Request and response schemas
- Database models
- User registration
- Password hashing
- Login authentication
- JWT token creation
- Protected routes
- Current logged-in user dependency
- User-owned data
- CRUD operations
- Error handling
- Testing basics
- Docker basics
- Deployment preparation

---

## Tech Stack

Recommended beginner stack:

| Tool | Purpose |
|---|---|
| Python | Programming language |
| FastAPI | Web API framework |
| Uvicorn | Development server |
| SQLAlchemy / SQLModel | Database ORM |
| SQLite | Beginner database |
| Pydantic | Data validation |
| Passlib / bcrypt | Password hashing |
| Python-Jose / PyJWT | JWT authentication |
| Pytest | Testing |
| Docker | Containerization |

For beginners, start with **SQLite**.  
Later, you can move to **PostgreSQL**.

---

## API Features

### Public Routes

These routes do not require login.

| Method | Route | Purpose |
|---|---|---|
| GET | `/health` | Check if API is running |
| POST | `/auth/register` | Create a new user |
| POST | `/auth/login` | Login and receive access token |

---

### Protected Routes

These routes require a valid JWT token.

| Method | Route | Purpose |
|---|---|---|
| GET | `/me` | Get current logged-in user |
| GET | `/tasks` | List current user's tasks |
| POST | `/tasks` | Create a task for current user |
| GET | `/tasks/{task_id}` | Get one task owned by current user |
| PATCH | `/tasks/{task_id}` | Update one task owned by current user |
| DELETE | `/tasks/{task_id}` | Delete one task owned by current user |

---

## API Rules

The API must follow these rules:

- Users can only see their own tasks.
- Users can only update their own tasks.
- Users can only delete their own tasks.
- Task title is required.
- Task priority can only be:
  - `low`
  - `medium`
  - `high`
- Password should never be returned in API responses.
- Password should never be stored as plain text.
- Protected routes require a valid token.

---

## Data Models

### User Model

Database fields:

| Field | Type | Description |
|---|---|---|
| `id` | int | Unique user id |
| `name` | str | User's name |
| `email` | str | User's email address |
| `password_hash` | str | Hashed password |
| `created_at` | datetime | Account creation time |

Important:

Never return `password_hash` from the API response.

---

### Task Model

Database fields:

| Field | Type | Description |
|---|---|---|
| `id` | int | Unique task id |
| `title` | str | Task title |
| `description` | str or null | Optional task description |
| `completed` | bool | Task completion status |
| `priority` | str | `low`, `medium`, or `high` |
| `owner_id` | int | User id of task owner |
| `created_at` | datetime | Task creation time |
| `updated_at` | datetime | Last task update time |

---

## Suggested Project Structure

```text
app/
├── main.py
├── database.py
├── core/
│   ├── config.py
│   └── security.py
├── models/
│   ├── user.py
│   └── task.py
├── schemas/
│   ├── user.py
│   ├── task.py
│   └── auth.py
├── routers/
│   ├── auth.py
│   ├── users.py
│   └── tasks.py
├── services/
│   ├── auth_service.py
│   └── task_service.py
└── tests/
    ├── test_auth.py
    └── test_tasks.py
```

---

## What Each Folder Means

### `app/main.py`

The entry point of your FastAPI app.

Responsibilities:

- Create FastAPI app
- Include routers
- Add health route
- Start app configuration

---

### `app/database.py`

Database setup file.

Responsibilities:

- Create database engine
- Create database session
- Provide database dependency
- Create tables during development

---

### `app/core/config.py`

Application configuration.

Responsibilities:

- Store app settings
- Read environment variables
- Store database URL
- Store JWT secret key
- Store token expiry time

---

### `app/core/security.py`

Security helper functions.

Responsibilities:

- Hash password
- Verify password
- Create JWT token
- Decode JWT token

---

### `app/models/`

Database models live here.

Examples:

- User table model
- Task table model

These represent how data is stored in the database.

---

### `app/schemas/`

Pydantic request and response models live here.

Examples:

- Register request schema
- Login request schema
- User response schema
- Task create schema
- Task update schema
- Task response schema

These represent how data enters and leaves your API.

---

### `app/routers/`

API route files live here.

Examples:

- Auth routes
- User routes
- Task routes

Routers keep your API clean instead of putting everything in `main.py`.

---

### `app/services/`

Business logic lives here.

Examples:

- Create user
- Authenticate user
- Create task
- Check task ownership
- Update task
- Delete task

Services keep route files simple.

---

### `app/tests/`

Test files live here.

Examples:

- Test register
- Test login
- Test create task
- Test user cannot access another user's task

---

## Setup Instructions

### 1. Create Project Folder

```bash
mkdir task-manager-api
cd task-manager-api
```

---

### 2. Create Virtual Environment

```bash
python3 -m venv .venv
```

Activate it:

```bash
source .venv/bin/activate
```

On Windows:

```bash
.venv\Scripts\activate
```

You should see:

```text
(.venv)
```

in your terminal.

---

### 3. Create `requirements.txt`

Create a file named:

```text
requirements.txt
```

Add:

```txt
fastapi[standard]
sqlalchemy
passlib[bcrypt]
python-jose[cryptography]
python-multipart
pytest
```

Then install:

```bash
python -m pip install -r requirements.txt
```

---

### 4. Run the App

If your app is inside `app/main.py`, run:

```bash
uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

Swagger docs:

```text
http://127.0.0.1:8000/docs
```

---

## Environment Variables

Create a `.env` file later when you add settings.

Example:

```env
APP_NAME=Task Manager API
DATABASE_URL=sqlite:///./task_manager.db
SECRET_KEY=change-this-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

Important:

Never commit real secret keys to GitHub.

---

## Build Order

Follow this exact order as a beginner.

---

## Step 1: Health Route

Create a simple route to check if the API is running.

Endpoint:

```http
GET /health
```

Example response:

```json
{
  "status": "ok",
  "message": "Task Manager API is running"
}
```

Why this step matters:

Before adding database and auth, first make sure your FastAPI app works.

---

## Step 2: Database Connection

Create a database connection.

Start with SQLite:

```text
sqlite:///./task_manager.db
```

Why SQLite first?

- Easy to use
- No separate database server required
- Good for learning
- Database is stored as a local file

Later you can move to PostgreSQL.

---

## Step 3: User Model

Create the database model for users.

Fields:

```text
id
name
email
password_hash
created_at
```

Important rules:

- `email` should be unique.
- `password_hash` stores hashed password.
- Do not store plain password.

---

## Step 4: Register Route

Endpoint:

```http
POST /auth/register
```

Request body:

```json
{
  "name": "Tanish",
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Response body:

```json
{
  "id": 1,
  "name": "Tanish",
  "email": "tanish@example.com",
  "created_at": "2026-06-20T10:00:00"
}
```

Rules:

- Email should be unique.
- Password should be hashed before saving.
- Password should not be returned.

---

## Step 5: Password Hashing

Never store this:

```text
secret123
```

Store something like this:

```text
$2b$12$wJ8...
```

You need two helper functions:

```python
hash_password(password)
verify_password(plain_password, hashed_password)
```

The register route uses `hash_password`.

The login route uses `verify_password`.

---

## Step 6: Login Route

Endpoint:

```http
POST /auth/login
```

Request body:

```json
{
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Response body:

```json
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}
```

Rules:

- Check if user exists.
- Verify password.
- If valid, create JWT token.
- If invalid, return `401 Unauthorized`.

---

## Step 7: JWT Creation

JWT means JSON Web Token.

After login, the API returns a token.

The frontend stores this token and sends it with protected requests.

Header format:

```http
Authorization: Bearer your_token_here
```

JWT should contain user identity, usually user id or email.

Example payload:

```json
{
  "sub": "1",
  "exp": 1718888888
}
```

---

## Step 8: Current User Dependency

Create a dependency that:

1. Reads token from request header.
2. Decodes token.
3. Gets user id from token.
4. Finds user in database.
5. Returns current user.

This dependency will be used by protected routes.

Example idea:

```python
def get_current_user():
    ...
```

Routes using this dependency are protected.

---

## Step 9: Task Model

Create the database model for tasks.

Fields:

```text
id
title
description
completed
priority
owner_id
created_at
updated_at
```

Important:

`owner_id` connects a task to a user.

This is how the API knows who owns which task.

---

## Step 10: Create Task

Endpoint:

```http
POST /tasks
```

Protected route.

Request body:

```json
{
  "title": "Learn FastAPI Auth",
  "description": "Build login and JWT flow",
  "priority": "high"
}
```

Response body:

```json
{
  "id": 1,
  "title": "Learn FastAPI Auth",
  "description": "Build login and JWT flow",
  "completed": false,
  "priority": "high",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T10:00:00"
}
```

Rule:

The task owner should be the current logged-in user.

Do not allow user to pass `owner_id` manually from request body.

---

## Step 11: List Only Current User's Tasks

Endpoint:

```http
GET /tasks
```

Protected route.

Response body:

```json
[
  {
    "id": 1,
    "title": "Learn FastAPI Auth",
    "description": "Build login and JWT flow",
    "completed": false,
    "priority": "high",
    "owner_id": 1,
    "created_at": "2026-06-20T10:00:00",
    "updated_at": "2026-06-20T10:00:00"
  }
]
```

Important database filter:

```text
owner_id == current_user.id
```

This prevents users from seeing other users' tasks.

---

## Step 12: Get One Task

Endpoint:

```http
GET /tasks/{task_id}
```

Protected route.

Rules:

- Find task by `task_id`.
- Check task belongs to current user.
- If task does not exist, return `404`.
- If task belongs to another user, also return `404`.

Returning `404` is common because you do not want to reveal that another user's task exists.

---

## Step 13: Update Task

Endpoint:

```http
PATCH /tasks/{task_id}
```

Protected route.

Request body:

```json
{
  "completed": true
}
```

Rules:

- User can update only their own task.
- PATCH should allow partial update.
- Use `exclude_unset=True` when converting Pydantic model to dictionary.

Example:

```python
update_data = task_update.model_dump(exclude_unset=True)
```

This prevents missing fields from overwriting existing values.

---

## Step 14: Delete Task

Endpoint:

```http
DELETE /tasks/{task_id}
```

Protected route.

Rules:

- User can delete only their own task.
- If deleted successfully, return `204 No Content`.
- Do not return response body with `204`.

---

## Step 15: Tests

Start with these tests.

### Auth Tests

File:

```text
app/tests/test_auth.py
```

Test cases:

- Register user successfully
- Cannot register same email twice
- Login with correct credentials
- Login fails with wrong password
- `/me` works with valid token
- `/me` fails without token

---

### Task Tests

File:

```text
app/tests/test_tasks.py
```

Test cases:

- Create task with token
- Cannot create task without token
- List only current user's tasks
- Get own task
- Cannot get another user's task
- Update own task
- Cannot update another user's task
- Delete own task
- Cannot delete another user's task

---

## Step 16: Dockerfile

Create a `Dockerfile` later.

Basic example:

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

---

## Step 17: Deployment

Beginner-friendly deployment options:

- Render
- Railway
- Fly.io
- DigitalOcean
- AWS later

Before deployment:

- Use PostgreSQL instead of SQLite
- Move secrets to environment variables
- Add CORS configuration
- Add proper logging
- Add production Dockerfile
- Add migrations with Alembic

---

## Endpoint Details

---

## `GET /health`

Purpose:

Check if the API is alive.

Response:

```json
{
  "status": "ok",
  "message": "Task Manager API is running"
}
```

---

## `POST /auth/register`

Purpose:

Create a new user account.

Request:

```json
{
  "name": "Tanish",
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Success response:

```json
{
  "id": 1,
  "name": "Tanish",
  "email": "tanish@example.com",
  "created_at": "2026-06-20T10:00:00"
}
```

Error response if email exists:

```json
{
  "detail": "Email already registered"
}
```

---

## `POST /auth/login`

Purpose:

Login user and return token.

Request:

```json
{
  "email": "tanish@example.com",
  "password": "secret123"
}
```

Success response:

```json
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}
```

Error response:

```json
{
  "detail": "Invalid email or password"
}
```

---

## `GET /me`

Purpose:

Get currently logged-in user.

Requires header:

```http
Authorization: Bearer your_token_here
```

Response:

```json
{
  "id": 1,
  "name": "Tanish",
  "email": "tanish@example.com",
  "created_at": "2026-06-20T10:00:00"
}
```

---

## `GET /tasks`

Purpose:

Get current user's tasks.

Requires token.

Response:

```json
[
  {
    "id": 1,
    "title": "Learn FastAPI",
    "description": "Build Task Manager API",
    "completed": false,
    "priority": "medium",
    "owner_id": 1,
    "created_at": "2026-06-20T10:00:00",
    "updated_at": "2026-06-20T10:00:00"
  }
]
```

---

## `POST /tasks`

Purpose:

Create task.

Requires token.

Request:

```json
{
  "title": "Learn JWT",
  "description": "Understand auth flow",
  "priority": "high"
}
```

Response:

```json
{
  "id": 1,
  "title": "Learn JWT",
  "description": "Understand auth flow",
  "completed": false,
  "priority": "high",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T10:00:00"
}
```

---

## `GET /tasks/{task_id}`

Purpose:

Get one task.

Requires token.

Response:

```json
{
  "id": 1,
  "title": "Learn JWT",
  "description": "Understand auth flow",
  "completed": false,
  "priority": "high",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T10:00:00"
}
```

---

## `PATCH /tasks/{task_id}`

Purpose:

Partially update a task.

Requires token.

Request examples:

```json
{
  "completed": true
}
```

```json
{
  "title": "Learn FastAPI JWT",
  "priority": "medium"
}
```

Response:

```json
{
  "id": 1,
  "title": "Learn FastAPI JWT",
  "description": "Understand auth flow",
  "completed": true,
  "priority": "medium",
  "owner_id": 1,
  "created_at": "2026-06-20T10:00:00",
  "updated_at": "2026-06-20T11:00:00"
}
```

---

## `DELETE /tasks/{task_id}`

Purpose:

Delete one task.

Requires token.

Success response:

```http
204 No Content
```

There should be no JSON response body.

---

## Suggested Beginner Commit Plan

Use this commit order:

```text
01 - initial FastAPI app with health route
02 - add database connection
03 - add user model and schema
04 - add register route
05 - add password hashing
06 - add login route
07 - add JWT token creation
08 - add current user dependency
09 - add task model and schema
10 - add create task route
11 - add list current user's tasks
12 - add get single task route
13 - add update task route
14 - add delete task route
15 - add auth tests
16 - add task tests
17 - add Dockerfile
18 - add deployment config
```

---

## Beginner Concepts You Should Understand

### What is Authentication?

Authentication means:

```text
Who are you?
```

Example:

User logs in with email and password.

---

### What is Authorization?

Authorization means:

```text
What are you allowed to do?
```

Example:

A user can delete their own task, but not another user's task.

---

### What is Password Hashing?

Password hashing means converting a password into a secure unreadable value.

Never store plain passwords.

Bad:

```text
secret123
```

Good:

```text
$2b$12$kjf...
```

---

### What is JWT?

JWT is a token that proves the user is logged in.

Flow:

```text
User logs in
API returns token
Frontend stores token
Frontend sends token with protected API requests
API validates token
API knows current user
```

---

### What is a Protected Route?

A protected route requires a token.

Example:

```http
GET /tasks
```

This should not work unless the user is logged in.

---

### What is Ownership?

Ownership means data belongs to a specific user.

Example:

```text
Task owner_id = User id
```

So when user 1 requests tasks:

```text
only return tasks where owner_id = 1
```

---

### What is CRUD?

CRUD means:

```text
Create
Read
Update
Delete
```

Task routes are CRUD routes.

---

## Common Mistakes

### Returning Password Hash

Do not return this:

```json
{
  "password_hash": "$2b$12$..."
}
```

Create a response schema that excludes password fields.

---

### Allowing User to Pass `owner_id`

Do not allow this request:

```json
{
  "title": "Task",
  "owner_id": 5
}
```

The backend should set `owner_id` from the logged-in user.

---

### Forgetting Token Header

Protected routes need:

```http
Authorization: Bearer your_token_here
```

---

### Returning Body with `204`

This is wrong:

```json
{
  "message": "Deleted"
}
```

when status code is `204`.

For `204`, return no body.

---

### Updating Fields to `None` Accidentally

For PATCH routes, use:

```python
model_dump(exclude_unset=True)
```

This only updates fields sent by the user.

---

## Stretch Features

Add these after the main project works.

### Pagination

Example:

```http
GET /tasks?limit=10&offset=0
```

---

### Search by Title

Example:

```http
GET /tasks?search=fastapi
```

---

### Filter by Completed Status

Example:

```http
GET /tasks?completed=true
```

---

### Due Date

Add field:

```text
due_date
```

---

### Team / Project Support

Allow tasks to belong to teams or projects.

---

### Role-Based Permissions

Example roles:

```text
admin
member
viewer
```

---

### Email Verification

Send email after registration and verify account.

---

### Password Reset

Allow user to reset password using email token.

---

## Suggested Learning Strategy

Do not build everything at once.

Build in this order:

1. Make one route work.
2. Test it in Swagger.
3. Add one model.
4. Test it.
5. Add one auth feature.
6. Test it.
7. Add one task feature.
8. Test it.

Small steps are better than copying a full project.

---

## Final Goal

At the end, you should be able to run:

```bash
uvicorn app.main:app --reload
```

Then open:

```text
http://127.0.0.1:8000/docs
```

And test:

```text
Register user
Login user
Copy token
Authorize in Swagger
Create task
List tasks
Update task
Delete task
```

If this works, you have built a real backend API.

---

## Project Status Checklist

Use this checklist while building.

```text
[ ] Health route works
[ ] Database connection works
[ ] User model created
[ ] Register route works
[ ] Password is hashed
[ ] Duplicate email is blocked
[ ] Login route works
[ ] JWT token is returned
[ ] Protected route blocks unauthenticated user
[ ] /me returns current user
[ ] Task model created
[ ] Create task works
[ ] List tasks returns only current user's tasks
[ ] Get task checks ownership
[ ] Update task checks ownership
[ ] Delete task checks ownership
[ ] Password is never returned
[ ] Tests added
[ ] Dockerfile added
[ ] README completed
```

---

## Git Ignore

Create `.gitignore`:

```gitignore
.venv/
__pycache__/
*.pyc
.env
task_manager.db
.pytest_cache/
```

---

## Recommended Next Step

Start with this:

```text
Step 1: Create app/main.py and add GET /health
```

Do not start with JWT or database immediately.

First make the app run.

