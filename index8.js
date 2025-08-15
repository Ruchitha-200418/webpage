let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

a = a + b;
b = a - b;
a = a - b;

alert("After swapping (without temp):\nFirst number: " + a + "\nSecond number: " + b);
