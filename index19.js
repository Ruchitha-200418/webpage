let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let c = parseFloat(prompt("Enter third number:"));

if (a <= b && a <= c) {
    alert(a + " is the smallest.");
} else if (b <= a && b <= c) {
    alert(b + " is the smallest.");
} else {
    alert(c + " is the smallest.");
}
