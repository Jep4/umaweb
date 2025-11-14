from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from controller import router
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

static_dir = os.path.join(os.path.dirname(__file__), "uma", "build")
static_files_dir = os.path.join(static_dir, "static")

app.mount("/static", StaticFiles(directory=static_files_dir), name="static")

app.include_router(router, prefix="/api", tags=["api"])

@app.get("/")
async def read_root():
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    return {"테스트": "FastAPI"}

@app.get("/favicon.ico")
async def favicon():
    favicon_path = os.path.join(static_dir, "favicon.ico")
    if os.path.exists(favicon_path):
        return FileResponse(favicon_path)

@app.get("/manifest.json")
async def manifest():
    manifest_path = os.path.join(static_dir, "manifest.json")
    if os.path.exists(manifest_path):
        return FileResponse(manifest_path)

@app.get("/robots.txt")
async def robots():
    robots_path = os.path.join(static_dir, "robots.txt")
    if os.path.exists(robots_path):
        return FileResponse(robots_path)

@app.get("/logo192.png")
async def logo192():
    logo_path = os.path.join(static_dir, "logo192.png")
    if os.path.exists(logo_path):
        return FileResponse(logo_path)

@app.get("/logo512.png")
async def logo512():
    logo_path = os.path.join(static_dir, "logo512.png")
    if os.path.exists(logo_path):
        return FileResponse(logo_path)

@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    if full_path.startswith("api/"):
        return {"error": "API endpoint not found"}
    if full_path.startswith("static/"):
        return {"error": "Static file not found"}
    file_path = os.path.join(static_dir, full_path)
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return FileResponse(file_path)
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    return {"error": "File not found"}

@app.on_event("startup")
async def startup_event():
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
    client = AsyncIOMotorClient(MONGO_URI)
    print("하이하이")

@app.on_event("shutdown")
async def shutdown_event():
    print("바이바이")