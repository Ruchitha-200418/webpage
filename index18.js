let num = parseInt(prompt("Enter a number:"));
if (num % 5 === 0 && num % 11 === 0) {
    alert(num + " is divisible by both 5 and 11.");
} else {
    alert(num + " is not divisible by both 5 and 11.");
}
