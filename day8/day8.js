// // Template Literals⬇︎
// let nam = "akshay"
// let age = 19;
// let str = `${nam} ${age}`
// console.log(str);

// let str2 = `Hey akshay, welcome to 
// the community. This dev community 
// is one of most popular in industry`

// console.log(str2);


// // Destructuring⬇︎
// let arr = ["a","b","c","d"]
// let [first, second] = arr
// console.log(first, second);

// let book = {
//     title: "The power mind",
//     author: "Kabirdas",
//     year: "1297"
// }
// let {title, author} = book;
// console.log(title, "by", author);



// // Spread and Rest Operators⬇︎
// let arr = [1,2,3,4]
// let newarr = [...arr,5,6,7]
// console.log(newarr);

// function sum(...values) {
//     let sum = 0;
//     for(let i of values){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));



// // Default Parameters⬇︎
// function product(a, b=1) {
//     return a*b;
// }
// console.log(product(2,7));
// console.log(product(2));


// // Enhanced Object Literals⬇︎
// let book = {
//     title: "The power mind",
//     author: "Kabirdas",
//     year: "1297",
//     info: function() {
//         return `${this.title} by ${this.author}`;
//     },
//     updateYear: function(year) {
//         this.year = year;
//         return this;
//     }
// };
// console.log(book);

// let Lastname = "lastname"
// let obj = {
//     firstname: "Akshay",
//     [Lastname]: "Kumar"
// }
// console.log(obj);