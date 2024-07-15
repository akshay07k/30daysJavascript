// // If-Else Statements⬇︎
// let num = 0;
// if(num > 0) console.log("num is positive");
// else if(num < 0) console.log("num is negative");
// else console.log("num is zero");

// let age = 18;
// if(age >= 18) console.log("Eligible for voting");
// else console.log("Not Eligible for voting");


// // Nested If-Else Statements⬇︎
// let x = 182, y = 234, z = 99;
// if(x > y){
//     if(x > z){
//         console.log("X is greater");
//     }
// }
// else if(y > z){
//     console.log("Y is greater");
// }
// else{
//     console.log("Z is greater");
// }

// // Switch Case⬇︎
// let day = 1;
// switch (day) {
//     case 1: console.log("Monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//     case 3: console.log("Wednesday");
//         break;
//     case 4: console.log("Thursday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("Saturday");
//         break;
//     case 7: console.log("Sunday");
//         break;

//     default: console.log("Invalid date");
//         break;
// }


// let marks = 112;
// switch (true) {
//     case marks >= 90 && marks <= 100: console.log("A");
//         break;
//     case marks >= 80 && marks < 90: console.log("B");
//         break;
//     case marks >= 60 && marks < 80: console.log("C");
//         break;
//     case marks >= 40 && marks < 60: console.log("D");
//         break;
//     case marks < 40 && marks >= 0: console.log("F");
//         break;

//     default: console.log("Invalid marks");
        
// }


// // Conditional(Ternary) Operator⬇︎
// let a = 23;
// a % 2 == 0 ? console.log("even") : console.log("odd");


// // Combining Conditions⬇︎
// let year = 2016;
// if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
//     console.log("year is leap year");
// }
// else{
//     console.log("year is not leap year");
// }