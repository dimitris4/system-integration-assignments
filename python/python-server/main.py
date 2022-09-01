import yaml
import json
import csv
import xml.etree.ElementTree as ET
import emoji
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello1": "World"}

print(emoji.emojize('Python is :thumbs_up:'))

print('\n.txt')
with open('../../words.txt', 'r') as f:
    lines = f.readlines()
f.close()
for a in lines:
    print(a[:-1])

print('\n.xml')
mytree = ET.parse('../../words.xml')
myroot = mytree.getroot()
for x in myroot:
    if len(list(x)) == 0:
        print(f"{x.tag}: {x.text}")
    else:
        for a in list(x):
            print(f"{a.tag}: {a.text}")

print('\n.csv')
with open('../../words.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)
    for row in reader:
        print(row)

print('\n.json')
f = open('../../words.json')
data = json.load(f)
for i in data:
    print(i, data[i])
f.close()

print('\n.yaml')
with open("../../words.yaml", "r") as stream:
    try:
        print(yaml.safe_load(stream))
    except yaml.YAMLError as exc:
        print(exc)