from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# 픽업 캐릭터 등 부가 정보

class UserActivity(BaseModel):
    target_date: datetime
    current_jewels: int
    ticket_count: int
    ranking: Optional[int] = None
    team_level: Optional[int] = None
    champion_material: Optional[int] = None
    loh_status: Optional[str] = None
    jewel_pack: bool
    tournament_event: bool
    search_date: datetime
    retry_count: int
    time_spent_seconds: int 
    