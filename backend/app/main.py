from fastapi import FastAPI

from backend.app.api.routes.claims import router as claims_router
from backend.app.api.routes.cover import router as cover_router
from backend.app.api.routes.onboarding import router as onboarding_router
from backend.app.api.routes.premium import router as premium_router
from backend.app.api.routes.transactions import router as transactions_router
from backend.app.api.routes.wallet import router as wallet_router


app = FastAPI(
    title="Rupee+ API",
    description="Micro-savings and personalized micro-insurance backend",
    version="1.0.0",
)

app.include_router(premium_router)
app.include_router(onboarding_router)
app.include_router(transactions_router)
app.include_router(wallet_router)
app.include_router(cover_router)
app.include_router(claims_router)


@app.get("/")
def root():
    return {
        "name": "Rupee+",
        "status": "running",
    }


@app.get("/health")
def health():
    return {"status": "healthy"}
