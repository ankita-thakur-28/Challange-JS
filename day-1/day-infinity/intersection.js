let A = [1, 2, 3, 4];
let B = [3, 4, 5, 6];

const intersection = A.filter(x => B.includes(x));

console.log("A:", A);
console.log("B:", B);
console.log("intersection(A ∩ B);", intersection);