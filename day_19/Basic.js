// Basic Regular Expressions⬇︎
// Task1
const text = "JavaScript is a popular language. javascript is versatile.";
const regex = /javascript/gi; // g for global match, i for case insensitive
const matches = text.match(regex);

// console.log(matches);


// Task2
const text2 = "The year is 2024. My phone number is 123-456-7890.";
const regex2 = /\d/g; // \d matches any digit, g for global match
const matches2 = text2.match(regex2);

console.log(matches2);
