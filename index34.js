let number = parseInt(prompt("Enter a number to check prime:"));
let isPrime = true;
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(number + " is a Prime number.");
} else {
  console.log(number + " is NOT a Prime number.");
}

