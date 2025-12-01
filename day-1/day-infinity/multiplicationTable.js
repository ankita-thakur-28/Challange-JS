// program to generate a multiplication table
//take input from user


const number = parseInt(prompt('enter an integer:'));

for (let i = 1; i<=10; i++)
{
const result = i * number;
console.log(`${number} * ${result}`);
}