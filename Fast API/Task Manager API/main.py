from fastapi import FastAPI

app = FastAPI(title="Task Manager API")

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Task manager API is running."
    }

