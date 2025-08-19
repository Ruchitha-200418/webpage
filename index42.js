let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log("Smallest element = " + smallest);

