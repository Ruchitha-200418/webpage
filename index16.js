let char = prompt("Enter a single alphabet character:").toLowerCase();
if (["a", "e", "i", "o", "u"].includes(char)) {
    alert(char + " is a vowel.");
} else if (char >= 'a' && char <= 'z') {
    alert(char + " is a consonant.");
} else {
    alert("Please enter a valid alphabet character.");
}
