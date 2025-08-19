let arrInput = prompt("Enter array elements separated by spaces:");
let arr = arrInput.split(" ").map(Number);

arr.sort((a, b) => b - a);

console.log("Array in Descending Order:", arr);
