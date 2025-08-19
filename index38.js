N = parseInt(prompt("Enter N for sum of squares:"));
let sumSquares = 0;
for (let i = 1; i <= N; i++) {
  sumSquares += i * i;
}
console.log("Sum of squares of first " + N + " numbers = " + sumSquares);

