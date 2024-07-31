// Assertion and Boundaries⬇︎
// Task7
const text = "JavaScript is a popular language. JavaScript can be used for both front-end and back-end development";
const regex = /^JavaScript/; // ^ asserts position at the start of the string
const matches = text.match(regex);

if (matches) {
  console.log("Matched word:", matches[0]);
} else {
  console.log("No matches found");
}


// Task8
const regex2 = /\bdevelopment\b$/; // \b matches a word boundary, $ matches the end of the string
const matches2 = text.match(regex2);

if (matches2) {
  console.log("Match found:", matches2[0]);
} else {
  console.log("No match found");
}
