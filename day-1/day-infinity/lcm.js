// program to find the LCM of two integer//

const num1 = parseInt(prompt('Enter the first positive integer: '));
const num2 = parseInt(prompt('Enter the second positive integer: '));

let min = (num1 > num2) ? num1 : num2;

while(true){
    if(min % num1 == 0 && min % num2 == 0){
        console.log(`The LCM OF ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}