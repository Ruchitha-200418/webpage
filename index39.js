N = parseInt(prompt("Enter N for sum of cubes:"));
let sumCubes = 0;
for (let i = 1; i <= N; i++) {
  sumCubes += i * i * i;
}
console.log("Sum of cubes of first " + N + " numbers = " + sumCubes);
