from fastapi import FastAPI

from Calculator import CalculatorInput, result

app = FastAPI()


@app.get("/")
def root():
    return {"in root": "enjoy"}


@app.post("/calculator")
def calculator(calc_input: CalculatorInput):
    try:
        return result(calc_input)
    except Exception as err:
        return {f"Unexpected {str(err)}"}
