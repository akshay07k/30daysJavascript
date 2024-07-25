// Task1
// // Understanding Promises⬇︎
// let promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("Resolved"), 2000);
//     setTimeout(() => reject("Rejected"), 2000);
// })
// promise.then((value) => {
//     console.log(value);
// })
// .catch((err) => {
//     console.log(err);
// })



// Task2
// // Chaining Promises⬇︎
// function fetchFromServer1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("1 Data fetched successfully"), 1000)
//     })
// }
// function fetchFromServer2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("2 Data fetched successfully"), 1000)
//     })
// }
// function fetchFromServer3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("3 Data fetched successfully"), 1000)
//     })
// }

// fetchFromServer1()
// .then((msg) => {
//     console.log(msg);
//     return fetchFromServer2();
// })
// .then((msg) => {
//     console.log(msg);
//     return fetchFromServer3();
// })
// .then((msg) => console.log(msg))



// Task3
// // Using Async/Await⬇︎
// async function func(){
//     await setTimeout(() => console.log("Resolved"), 1000);
// }
// func()

// function rejected() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Something wrong!"), 1000)
//     })
// }

// ;(async function fetch(){
//     try {
//         let data = await rejected();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ",error);
//     }
// }
// )()




// Task4
// // Fetching data from an API⬇︎
// async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
// }
// getData()




// Task5
// // Concurrent Promises⬇︎
// const promises = [
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("1st resolved");
//       }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("2nd resolved");
//       }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("3rd resolved");
//       }, 3000);
//     }),
// ];
  
// Promise.all(promises)
// .then((values) => {
//     console.log(values);
// })

// Promise.race(promises)
// .then((value) => console.log(value))