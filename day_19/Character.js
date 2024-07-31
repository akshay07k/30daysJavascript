// Character Classes and Quantifiers⬇︎
// Task3
const text = "The quick Brown Fox jumps over the Lazy Dog.";
const regex = /\b[A-Z][a-z]*\b/g; // \b for word boundary, [A-Z] for capital letter, [a-z]* for following lowercase letters, g for global match
const matches = text.match(regex);

if (matches) {
  console.log("Matches found:", matches);
} 
else {
  console.log("No matches found");
}


// Task4
const text2 = "The year is 2024. My phone number is 123-456-7890.";
const regex2 = /\d+/g; // \d matches any digit, + matches one or more digits, g for global match
const matches2 = text2.match(regex2);

if (matches2) {
  console.log("Matches found:", matches2);
} else {
  console.log("No matches found");
}
