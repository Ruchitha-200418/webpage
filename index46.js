let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

let evenCount = 0, oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Array:", arr);
console.log("Even numbers count = " + evenCount);
console.log("Odd numbers count = " + oddCount);
