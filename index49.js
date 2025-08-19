let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

let searchElement = parseInt(prompt("Enter element to search:"));
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchElement) {
    console.log("Element " + searchElement + " found at index " + i);
    found = true;
    break;
  }
}

if (!found) {
  console.log("Element " + searchElement + " not found in array.");
}
