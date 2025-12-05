//Calculator

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number"));

const operator = prompt('Enter operator (either +, -, * or / )');

let result;

if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-'){
    result = num1 - num2;
}
else if (operator == '*'){
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);