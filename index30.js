let N = parseInt(prompt("Enter number of terms for Fibonacci:"));
let a = 0, b = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= N; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}

