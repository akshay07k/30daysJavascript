// Grouping and Capturing⬇︎
// Task5
const text = "(123) 456-7890, (183) 256-7690, (723) 356-7890";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

const matches = text.match(regex);

if (matches) {
    console.log(matches);
} 
else {
    console.log("No matches found");
}




// Task6
const email = "example.user@domain.com";
const regex2 = /^([^@]+)@([^@]+)$/; // Captures the username and domain
const matches2 = email.match(regex2);

if (matches2) {
    // console.log(matches2);
    const username = matches2[1];
    const domain = matches2[2];
    console.log("Username:", username);
    console.log("Domain:", domain);
} 
else {
    console.log("No matches found");
}
