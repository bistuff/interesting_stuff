function updateClocks() {
    let now = new Date();

    document.getElementById("athens").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/Athens" });

    document.getElementById("sydney").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "Australia/Sydney" });

    document.getElementById("jakarta").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta" });

    document.getElementById("newyork").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "America/New_York" });

    document.getElementById("paris").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/Paris" });

    document.getElementById("california").textContent =
        now.toLocaleTimeString("en-GB", { timeZone: "America/Los_Angeles" });
}

// Update clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call

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