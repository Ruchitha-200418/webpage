let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

let temp = a;
a = b;
b = temp;

alert("After swapping (using temp):\nFirst number: " + a + "\nSecond number: " + b);
