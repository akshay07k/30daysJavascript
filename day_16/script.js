// Activity1
// Basic Recursion⬇︎
// Task1
function fact(n) {
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}
// console.log(fact(3));
// console.log(fact(0));
// console.log(fact(5));
// console.log(fact(7));


// Task2
function fibo(n) {
    if(n<=1){
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}
// console.log(fibo(4));
// console.log(fibo(1));
// console.log(fibo(9));





// Activity2
// Recursion with Arrays⬇︎
// Task3
function sumOfArray(arr, i) {
    if(i == arr.length){
        return 0;
    }
    return arr[i] + sumOfArray(arr, i+1);
}
// console.log(sumOfArray([1,2,3,4,5],0));


// Task4
function maxElement(arr, i) {
    if(i == arr.length-1){
        return arr[i];
    }
    let mx = maxElement(arr, i+1);
    return arr[i] > mx ? arr[i] : mx;
}

// console.log(maxElement([1,2,4,7,3],0));






// Activity3
// String Manipulation with recursion⬇︎
// Task5
function revString(str) {
    if(str === ""){
        return ""
    }
    // console.log(str);
    return revString(str.substring(1)) + str.charAt(0);
}
// console.log(revString("hello"));



// Task6
function isPalindrome(str) {
    if(str.length <= 1){
        return true;
    }
    // console.log(str);
    if(str.charAt(0) !== str.charAt(str.length-1)){
        return false;
    }
    return isPalindrome(str.substring(1, str.length-1))
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("race"));







// Activity4
// Recursive Search⬇︎
// Task7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        console.log("Target not found");
        return -1;
    }
    
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        console.log("Target found at index:", mid);
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 7;
// binarySearch(arr, target);




// Task8
function occurance(arr, target, idx = 0, c = 0) {
    if(idx === arr.length){
        return c;
    }
    if(arr[idx] === target){
        c++;
    }
    return occurance(arr, target, idx+1, c);
}

// console.log(occurance([1,2,4,1,3,5,1], 1));