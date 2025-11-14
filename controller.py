from fastapi import APIRouter, HTTPException
from models import UserActivity
from db import database

# MongoDB 컬렉션 이름
USER_ACTIVITY_COLLECTION = "user_activities"

# FastAPI 라우터 생성
router = APIRouter()

async def save_user_activity(user_activity: UserActivity):
    """사용자 활동 데이터를 DB에 저장하는 함수"""
    collection = database[USER_ACTIVITY_COLLECTION]
    document = user_activity.dict(exclude_unset=True)
    result = await collection.insert_one(document)
    return str(result.inserted_id)

@router.post("/user-activity")
async def create_user_activity(user_activity: UserActivity):
    """
    FE에서 전달받은 사용자 입력을 DB에 저장하는 엔드포인트
    
    Args:
        user_activity: UserActivity 모델에 맞는 JSON 데이터 (FE에서 parameter로 전달)
    
    Returns:
        저장된 문서의 ID와 성공 메시지
    """
    try:
        inserted_id = await save_user_activity(user_activity)
        return {
            "success": True,
            "message": "사용자 활동 데이터가 성공적으로 저장되었습니다.",
            "inserted_id": inserted_id
        }
    except Exception as e:
        import traceback
        error_detail = f"데이터 저장 중 오류가 발생했습니다: {str(e)}"
        print(f"Error: {error_detail}")
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=error_detail)
