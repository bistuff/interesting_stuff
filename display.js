let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;

function press(value) {
    // If it's a number or decimal
    if (!isNaN(value) || value === ".") {
        currentInput += value;
        display.value = currentInput;
    } else if (value === "C") {
        // Clear
        currentInput = "";
        firstOperand = null;
        operator = "";
        display.value = "";
    } else if (value === "=") {
        // Calculate
        if (firstOperand !== null && operator && currentInput) {
            let secondOperand = parseFloat(currentInput);
            let result;
            switch (operator) {
                case "+": result = firstOperand + secondOperand; break;
                case "-": result = firstOperand - secondOperand; break;
                case "*": result = firstOperand * secondOperand; break;
                case "/": result = firstOperand / secondOperand; break;
            }
            display.value = result;
            currentInput = result.toString();
            firstOperand = null;
            operator = "";
        }
    } else {
        // Operator pressed
        if (currentInput) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = "";
        }
    }
}