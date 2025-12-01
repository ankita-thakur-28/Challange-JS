// function to multiply digit of a number



function multiplyDigits(num){
    
    let product = 1;
    for(let digit of num.toString()) {
    product *= Number(digit);
}
    return product;
}
    console.log(multiplyDigits(123));