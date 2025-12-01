const number = parseInt(prompt('Enter the number of term'));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Number');

for(let i = 1; i <= number; i++){
console.log(n1);
nextTerm = n1 + n2;
n1 = n2;
n2 = nextTerm;
}