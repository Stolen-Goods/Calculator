let firstNumber = "";
let operator = ""
let secondNumber = "";
let result = "";
let display = document.getElementById("display");
let equals = document.getElementById("equals");
let clear =document.getElementById("clear");

function updateDisplay(value) {
    display.textContent = value;
}

function updateFirstNumber(value) {
    firstNumber += value;
    updateDisplay(firstNumber);
  }
  
function updateOperator(value) {
    operator = value;
    updateDisplay(operator);
  }
  
function updateSecondNumber(value) {
    secondNumber += value;
    updateDisplay(secondNumber);
  }

function displays() {
    let numberButtons = document.querySelectorAll(".number");
    let operatorButtons = document.querySelectorAll(".operator");
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener("click", (e) => {
            if (!operator) {
                updateFirstNumber(e.target.textContent);
            } else {
                updateSecondNumber(e.target.textContent);
            }
        });
    });
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener("click", (e) => {
            if (firstNumber && !secondNumber) {
                updateOperator(e.target.textContent);
            }
        });
    });
}

function add(firstNumber, secondNumber) {
    return Number(firstNumber) + Number(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return Number(firstNumber) - Number(secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return Number(firstNumber) * Number(secondNumber);
}

function divide(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        return "You can't do that!"; 
    } else {
        return Number(firstNumber) / Number(secondNumber);
    }
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    } else {
        return "Error";
    }
}

equals.addEventListener("click", () => {
    result = operate(firstNumber, operator, secondNumber);
    updateDisplay(result);
    firstNumber = result;
    secondNumber = "";
    operator = "";
});

clear.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
    updateDisplay(0);
})

displays()