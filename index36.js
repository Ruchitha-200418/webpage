start = parseInt(prompt("Enter start of range for Armstrong numbers:"));
end = parseInt(prompt("Enter end of range:"));
console.log("Armstrong numbers between " + start + " and " + end + ":");
for (let i = start; i <= end; i++) {
  let temp = i, sum = 0;
  let digits = i.toString().length;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }
  if (sum === i) console.log(i);
}
