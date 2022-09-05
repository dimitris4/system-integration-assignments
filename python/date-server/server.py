# main.py

from fastapi import FastAPI
import datetime

app = FastAPI()

@app.get("/")
async def root():
    return {datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc).isoformat()}