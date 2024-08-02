// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let num = parseInt(String(x).split('').reverse().join(''));
    if(num == x){
        return true;
    }
    return false;
};

const testcase1 = 121;
const testcase2 = -121;
const testcase3 = 10;

console.log(isPalindrome(testcase1))
console.log(isPalindrome(testcase2))
console.log(isPalindrome(testcase3))