document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("num1");
  const buttons = document.querySelectorAll(
    ".btn-ccl-x1 div, .btn-ccl-x2 div, .btn-ccl-x3 div, .btn-ccl-x4 div, .btn-ccl-x5 div"
  );
  let currentInput = "";
  let operator = "";
  let firstOperand = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "AC") {
        currentInput = "";
        operator = "";
        firstOperand = "";
        display.value = "";
      } else if (value === "=") {
        if (firstOperand && operator && currentInput) {
          display.value = calculate(firstOperand, operator, currentInput);
          firstOperand = display.value;
          currentInput = "";
          operator = "";
        }
      } else if (["+", "-", "X", "/", "%", "^", "!"].includes(value)) {
        if (currentInput) {
          firstOperand = currentInput;
          currentInput = "";
        }
        operator = value;
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function calculate(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "X":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      case "^":
        return Math.pow(a, b);
      case "!":
        return factorial(a);
      default:
        return 0;
    }
  }

  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
});
