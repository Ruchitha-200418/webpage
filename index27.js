number = parseInt(prompt("Enter a number to count digits:"));
let count = 0;
temp = number;
while (temp > 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log("Number of digits in " + number + " = " + count);
