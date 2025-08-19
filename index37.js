start = parseInt(prompt("Enter start of range for Perfect numbers:"));
end = parseInt(prompt("Enter end of range:"));
console.log("Perfect numbers between " + start + " and " + end + ":");
for (let i = start; i <= end; i++) {
  let sumDiv = 0;
  for (let j = 1; j <= i / 2; j++) {
    if (i % j === 0) sumDiv += j;
  }
  if (sumDiv === i && i !== 0) console.log(i);
}
