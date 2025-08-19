let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log("LCM of " + num1 + " and " + num2 + " = " + lcm(num1, num2));

