// Activity1
// // Basic Error Handling with Try-Catch⬇︎
// // Task1
// function getMonthName(mo) {
//     mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//     const months = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//       return months[mo];
//     } else {
//       throw "InvalidMonthNo";
//     }
// }
  
// try {
//     console.log(getMonthName(13));
// } catch (e) {
//     console.log(e); 
// }

// // Task2
// ;(function () {
//     try {
//         let num = 2 / 0;
//         if(!isFinite(num)) throw "Not divisible by zero"
//     } catch (error) {
//         console.log(error);
//     }
// })()




// Activity2
// // Finally Block⬇︎

// // Task3
// function getMonthName(mo) {
//     mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//     const months = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//       return months[mo];
//     } else {
//       throw "InvalidMonthNo";
//     }
// }
  
// try {
//     console.log(getMonthName(11));
// } catch (e) {
//     console.log(e); 
// }
// finally{
//     console.log("Successfully executed");
// }





// Activity3
// // Custom Error Objects⬇︎

// // Task4
// class CustomError extends Error {
//     constructor(msg){
//         super(msg)
//     }
// }
// try {
//     throw new CustomError("This is error message")
// } catch (e) {
//     if (e instanceof CustomError) {
//         console.log("Caught a custom error:", e.message);
//     } else {
//         console.log("Caught an unknown error:", e);
//     }
// }

// // Task5
// function validString(str){
//     try {
//         if(str == ""){
//             throw new Error("String is empty")
//         }
//         return true;
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// validString("")





// Activity4
// // Error Handling in Promises⬇︎

// // Task6
// ;(function () {
//     new Promise((resolve, reject) => {
//         let num = Math.random()*10;
//         console.log(num);
//         if(num > 5){
//             resolve("Number is greater")
//         }
//         else{
//             reject(new Error("Number is lesser"))
//         }
//     })
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err.message))
// })()

// // Task7
// ;(async function() {
//     try {
//         const result = await new Promise((resolve, reject) => {
//             if (Math.random() * 10 > 5) {
//                 resolve("Number is greater");
//             } else {
//                 reject(new Error("Number is lesser"));
//             }
//         });
//         console.log(result);
//     } catch (error) {
//         console.log("Error caught:", error.message);
//     }
// })()





// Activity5
// // Gracefull Error Handling in Fetch⬇︎

// // Task8
// ;(function () {
//     fetch("https://assddsgd.com/data")
//     .then(res => {
//         if(!res.ok){
//             throw new Error(`Eror in fetching`)
//         }
//         return res.json()
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
// })()


// // Task9
// ;(async function () {
//     try {
//         let res = await fetch("https://assddsgd.com/data")
//         if(!res.ok){
//             throw new Error("Eror in fetching")
//         }
//         return res.json();
//     } catch (error) {
//         console.log(error.message);
//     }
// })()
