from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    print("in root, enjoy")
