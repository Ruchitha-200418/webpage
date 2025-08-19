let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("Largest element = " + largest);
