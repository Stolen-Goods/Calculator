function displays() {
    if (!operator && !secondNumber) {
        let numberButtons = document.querySelectorAll(".number");
        numberButtons.forEach(numberButton => {
            numberButton.addEventListener("click", (e) => {
                updateFirstNumber(e.target.textContent)
            })
        })
    } else if (firstNumber && !secondNumber) {
        let operatorButtons = document.querySelectorAll(".operator");
        operatorButtons.forEach(operatorButton => {
            operatorButton.addEventListener("click", (e) => {
                updateOperator(e.target.textContent)
            })
        })
    } else if (!firstNumber && !operator) {
        let number2Buttons = document.querySelectorAll(".number");
        number2Buttons.forEach(numberButton2 => {
            numberButton2.addEventListener("click", (e) => {
                updateSecondNumber(e.target.textContent)
            })
        })
}
}