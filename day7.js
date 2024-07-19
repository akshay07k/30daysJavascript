// // Object Creation and Access⬇︎
// let book = {
//     title: "The power mind",
//     author: "Kabirdas",
//     year: "1297"
// }
// console.log(book);
// console.log(book.title);
// console.log(book.author);


// // Object Methods⬇︎
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
// // console.log(book.info());
// console.log(book.updateYear(1597));



// // Nested Objects⬇︎
// let library = {
//     name: "Tagor",
//     books: [
//         {
//             title: "The power mind",
//             author: "Kabirdas",
//             year: "1297",
//         },
//         {
//             title: "Faith",
//             author: "Haridas",
//             year: "1973",
//         },
//         {
//             title: "Kind to others",
//             author: "Deep",
//             year: "2013",
//         }
//     ]
// }

// // console.log(library);
// console.log(library.name);
// library.books.map((e) => console.log(e.title));



// // The 'this' keyword⬇︎
// let book = {
//     title: "The power mind",
//     author: "Kabirdas",
//     year: "1297",
//     info: function() {
//         return `${this.title} by ${this.author}`;
//     }
// };
// console.log(book.info());



// // Object Iteration⬇︎
// let book = {
//     title: "The power mind",
//     author: "Kabirdas",
//     year: "1297"
// };

// // for(let i in book){
// //     console.log("property: " + i + " , value: " + book[i]);
// // }

// console.log(Object.keys(book));
// console.log(Object.values(book));