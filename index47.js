let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log("Array in Ascending Order:", arr);
