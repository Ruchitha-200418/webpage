let start = parseInt(prompt("Enter start of range:"));
let end = parseInt(prompt("Enter end of range:"));
console.log("Prime numbers between " + start + " and " + end + ":");
for (let i = start; i <= end; i++) {
  let prime = true;
  if (i <= 1) prime = false;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}