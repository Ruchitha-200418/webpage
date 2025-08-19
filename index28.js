number = parseInt(prompt("Enter a number to calculate sum of digits:"));
let digitSum = 0;
temp = number;
while (temp > 0) {
  digitSum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log("Sum of digits = " + digitSum);
