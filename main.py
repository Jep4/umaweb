from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from controller import router

app = FastAPI()

# controller 라우터 등록
app.include_router(router)

@app.get("/")
def read_root():
    return {"테스트": "FastAPI"}

@app.on_event("startup")
async def startup_event():
    MONGO_URI = "mongodb://localhost:27017"
    client = AsyncIOMotorClient(MONGO_URI)
    print("하이하이")

@app.on_event("shutdown")
async def shutdown_event():
    print("바이바이")