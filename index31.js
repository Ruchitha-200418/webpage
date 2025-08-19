function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let terms = parseInt(prompt("Enter number of terms for recursive Fibonacci:"));
console.log("Fibonacci Series (Recursion):");
for (let i = 0; i < terms; i++) {
  console.log(fibonacci(i));
}
