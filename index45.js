let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

let reversedArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArray.push(arr[i]);
}

console.log("Original Array:", arr);
console.log("Reversed Array:", reversedArray);
