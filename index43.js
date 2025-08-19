let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum of array elements = " + sum);
