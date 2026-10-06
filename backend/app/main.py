from fastapi import FastAPI

from backend.app.api.routes.premium import router as premium_router


app = FastAPI(
    title="Rupee+ API",
    description="Micro-savings and personalized micro-insurance backend",
    version="1.0.0",
)

app.include_router(premium_router)


@app.get("/")
def root():
    return {
        "name": "Rupee+",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }
