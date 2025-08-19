number = parseInt(prompt("Enter a number to check palindrome:"));
temp = number;
let reverseNum = 0;
while (temp > 0) {
  let digit = temp % 10;
  reverseNum = reverseNum * 10 + digit;
  temp = Math.floor(temp / 10);
}
if (number === reverseNum) {
  console.log(number + " is a Palindrome.");
} else {
  console.log(number + " is NOT a Palindrome.");
}
