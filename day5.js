// // Function Declaration⬇︎
// function isEven(num){
//     return num%2 == 0;
// }

// console.log(isEven(7));

// function square(num){
//     return num*num;
// }

// console.log(square(7));



// // Function Expression⬇︎
// function max(num1, num2){
//     return num1 > num2 ? num1 : num2;
// }
// console.log(max(5,7));

// function concat(str1, str2){
//     return str1+str2;
// }
// console.log(concat("chai", "code"));



// // Arrow Functions⬇︎
// const sum = (num1, num2) => {
//     return num1+num2;
// }
// console.log(sum(3, 4));


// const isSpecificCharacter = (str) => {
//     for(let i in str){
//         i = str.charCodeAt(i);
//         // console.log(i);
//         if((i>=65 && i<=90) || (i>=97 && i<=122) || (i>=48 && i<=57)){
//             continue;
//         }
//         else{
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isSpecificCharacter("adfg$aga"));



// // Function Parameters and Default Values⬇︎
// function product(num1, num2 = 4) {
//     return num1*num2;
// }
// console.log(product(2));

// function greeting(name, age = 18) {
//     return `Welcome ${name} sir, your age is ${age}`
// }
// console.log(greeting("Akshay"));


// Higher-Order Functions⬇︎
// function cb(num){
//     console.log(num);
// }

// function x(cb, num) {
//     while(num--){
//         cb(num);
//     }
// }
// x(cb, 2)


// function cb1(value) {
//     return value*2;
// }
// function cb2(value) {
//     return value+2;
// }
// function y(cb1, cb2, value) {
//     return cb2(cb1(value));
// }
// console.log(y(cb1,cb2, 5));