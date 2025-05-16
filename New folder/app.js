function greetUser() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  if (!firstName || !lastName) {
    alert('Please enter both first and last names.');
    return;
  }
  alert("Hello, " + firstName + " " + lastName + "!");
}







function addTwoNumbers() {
  const num1 = parseFloat(document.getElementById('addNum1').value);
  const num2 = parseFloat(document.getElementById('addNum2').value);
  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers.');
    return;
  }
  alert("Sum is: " + (num1 + num2));
}







function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*':
    case 'x': result = num1 * num2; break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default: result = "Invalid operator";
  }
  return result;
}







function calculate() {
  const num1 = parseFloat(document.getElementById('calcNum1').value);
  const num2 = parseFloat(document.getElementById('calcNum2').value);
  const operator = document.getElementById('calcOperator').value;
  if (isNaN(num1) || isNaN(num2) || !operator) {
    alert('Please enter valid numbers and operator.');
    return;
  }
  alert("Result: " + calculator(num1, num2, operator));
}







function square(num) {
  return num * num;
}
function showSquare() {
  const num = parseFloat(document.getElementById('squareNum').value);
  if (isNaN(num)) {
    alert('Enter a valid number');
    return;
  }
  alert("Square is: " + square(num));
}









function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}
function showFactorial() {
  const n = parseInt(document.getElementById('factorialNum').value);
  if (isNaN(n) || n < 0) {
    alert('Enter a non-negative integer');
    return;
  }
  alert("Factorial is: " + factorial(n));
}







function displayCounting() {
  const start = parseInt(document.getElementById('countStart').value);
  const end = parseInt(document.getElementById('countEnd').value);
  const output = document.getElementById('countOutput');
  if (isNaN(start) || isNaN(end)) {
    output.textContent = 'Enter valid numbers';
    return;
  }
  if (start > end) {
    output.textContent = "Start should be less than or equal to End";
    return;
  }
  let result = '';
  for (let i = start; i <= end; i++) {
    result += i + '\n';
  }
  output.textContent = result;
}







function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) { return x * x; }
  return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}
function showHypotenuse() {
  const base = parseFloat(document.getElementById('hypBase').value);
  const perpendicular = parseFloat(document.getElementById('hypPerpendicular').value);
  if (isNaN(base) || isNaN(perpendicular)) {
    alert('Enter valid numbers');
    return;
  }
  alert("Hypotenuse is: " + calculateHypotenuse(base, perpendicular).toFixed(2));
}








function calculateArea(width, height) {
  return width * height;
}
function showRectangleArea() {
  const width = parseFloat(document.getElementById('rectWidth').value);
  const height = parseFloat(document.getElementById('rectHeight').value);
  if (isNaN(width) || isNaN(height)) {
    alert('Enter valid numbers');
    return;
  }
  alert("Area is: " + calculateArea(width, height));
}






function isPalindrome(str) {
  const cleaned = ""
}