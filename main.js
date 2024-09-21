let firstNumber;
let secondNumber;
let operator;

function add() {
    return firstNumber + secondNumber;
}

function subtract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}

function displays() {

}

function operate(operator) {
    if (operator === "+") {
        return add();
    } else if (operator === "-") {
        return subtract();
    } else if (operator === "*") {
        return multiply();
    } else if (operator === "/") {
        return divide();
    } else {
        return "Error";
    }
}


let display = document.getElementById("display");
display.textContent = `${firstNumber} ${secondNumber}`;


let equals = document.getElementById("equals");
equals.addEventListener("click", operate);