let number = parseInt(prompt("Enter a number to reverse:"));
let reversed = 0, temp = number;
while (temp > 0) {
  let digit = temp % 10;
  reversed = reversed * 10 + digit;
  temp = Math.floor(temp / 10);
}
console.log("Reversed number = " + reversed);
