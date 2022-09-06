import json
from fastapi import FastAPI, Query
import datetime
import requests

app = FastAPI()

@app.get("/")
def _():
    return {datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc).isoformat()}

@app.get('/get-time')
def _():
    node_server_url= "http://localhost:8080/"
    test_get_response = requests.get(node_server_url)
    if test_get_response.status_code == 200:
        print(test_get_response.content)
        return test_get_response.content

# @app.get("/items/{item_id}")
# def _(item_id: int):
#     return {"item_id": item_id}

# @app.get("/items")
# def _(page: int = Query(default=1, gt=0)):
#     return {"page": page}