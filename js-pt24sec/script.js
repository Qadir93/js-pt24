function greetUser(firstName, lastName) {
  alert("Hello, " + firstName + " " + lastName + "!");
}
greetUser("qadir", "khan");




function addTwoNumbers() {
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number:"));
  const sum = num1 + num2;
  return sum;
}

alert("Sum is: " + addTwoNumbers());





function calculator(num1, num2, operator) {
  let result;
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operator";
  }
  return result;
}

const res = calculator(10, 5, '+');
alert("Result: " + res);






function square(num) {
  return num * num;
}

console.log(square(4)); 






function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for(let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));






function displayCounting(start, end) {
  if (start > end) {
    document.write("Start should be less than or equal to End");
    return;
  }
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

displayCounting(1, 10);






function calculateHypotenuse(base, perpendicular) {

  function calculateSquare(x) {
    return x * x;
  }

  const baseSquared = calculateSquare(base);
  const perpendicularSquared = calculateSquare(perpendicular);

  const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);
  return hypotenuse;
}

const base = 3;
const perpendicular = 4;
const hyp = calculateHypotenuse(base, perpendicular);

console.log("Hypotenuse: " + hyp); 





function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10)); 



function calculateArea(width, height) {
  return width * height;
}

const w = 7;
const h = 4;
console.log(calculateArea(w, h));






function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, ""); 
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(isPalindrome("madam"));     
console.log(isPalindrome("hello"));      
console.log(isPalindrome("A man, a plan, a canal, Panama")); 






function toTitleCase(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}


const exampleStr = 'the quick brown fox';
console.log(toTitleCase(exampleStr)); 






function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const exampleString = 'Web Development Tutorial';
console.log(findLongestWord(exampleString));






function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}

const radius = 5;
calcCircumference(radius); 
calcArea(radius);    
