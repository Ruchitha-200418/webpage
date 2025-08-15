let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
if (a > b) {
    alert(a + " is the largest.");
} else if (b > a) {
    alert(b + " is the largest.");
} else {
    alert("Both numbers are equal.");
}
