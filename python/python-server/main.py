import yaml
import json
import xml.etree.ElementTree as ET
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

app = FastAPI()

@app.get("/read-file/xml")
def read_root():
    mytree = ET.parse('../../words.xml')
    result = ''
    myroot = mytree.getroot()
    for x in myroot:
        if len(list(x)) == 0:
            result += f'{x.tag}: {x.text}'
        else:
            for a in list(x):
                result += f'{a.tag}: {a.text}'
    return result


@app.get("/read-file/yaml")
def read_root():
    result = ''
    with open("../../words.yaml", "r") as stream:
        try:
            result += f'{yaml.safe_load(stream)}'
        except yaml.YAMLError as exc:
            return exc
    return result


@app.get("/read-file/json")
def read_root():
    result = ''
    f = open('../../words.json')
    data = json.load(f)
    for i in data:
        result += f'{i} {data[i]}'
    f.close()
    return result


# print('\n.txt')
# with open('../../words.txt', 'r') as f:
#     lines = f.readlines()
# f.close()
# for a in lines:
#     print(a[:-1])


# print('\n.csv')
# with open('../../words.csv', 'r') as csv_file:
#     reader = csv.reader(csv_file)
#     for row in reader:
#         print(row)

# example with request body, query parameter, and path variable
@app.post("/post-example/{item_id}")
def _(item: Item, item_id, q: str | None = None):
    print(f'path variable = {item_id}, query parameter = {q}')
    return item