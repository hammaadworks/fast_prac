from enum import Enum
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

calc_app = FastAPI()


class CalculatorOperation(str, Enum):
    add = "+"
    subtract = "-"
    multiply = "*"
    divide = "/"


class CalculatorInput(BaseModel):
    a: Union[float, int]
    b: Union[float, int]
    operation: CalculatorOperation


def result(request: CalculatorInput):
    match request.operation:
        case "+":
            return request.a + request.b
        case "-":
            return request.a - request.b
        case "*":
            return request.a * request.b
        case "/":
            return request.a / request.b
