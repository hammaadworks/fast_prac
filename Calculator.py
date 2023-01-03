from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
from enum import Enum

calc_app = FastAPI()

class CalculatorOperation(str,Enum):
    add = "+"
    subtract = "-"
    multiply = "*"
    divide = "/"

class CalculatorInput(BaseModel):
    a:Union[float,int]
    b:Union[float,int]
    operation:CalculatorOperation

def result(input: CalculatorInput):
    match input.operation:
        case "+":
            return input.a + input.b
        case "-":
            return input.a - input.b
        case "*":
            return input.a * input.b
        case "/":
            return input.a / input.b

@calc_app.post("/calculator")
def calculator(input: CalculatorInput):
    try:
        return result(input)
    except Exception as err:
        return {f"Unexpected {err}"}
        raise
