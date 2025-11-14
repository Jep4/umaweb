from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
import urllib.parse

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "mydatabase")

try:
    client = AsyncIOMotorClient(MONGO_URI)
    database = client[MONGO_DB_NAME]
    print(f"MongoDB 연결 시도: {MONGO_URI.split('@')[1] if '@' in MONGO_URI else MONGO_URI}")
except Exception as e:
    print(f"MongoDB 연결 오류: {str(e)}")
    raise