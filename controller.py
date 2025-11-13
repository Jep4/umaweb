
async def save_user_activity(user_activity: UserActivity):
    collection = database[USER_ACTIVITY_COLLECTION]
    document = user_activity.dict(exclude_unset=True)
    result = await collection.insert_one(document)
    return str(result.inserted_id)