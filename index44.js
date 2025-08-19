let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

// Calculate sum of array elements
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// Calculate average
let average = sum / arr.length;

// Display result
console.log("Array:", arr);
console.log("Sum = " + sum);
console.log("Average = " + average);
