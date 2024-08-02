// https://leetcode.com/problems/reverse-integer/description/

var reverse = function(x) {
    let y = Math.abs(x);
    let ans = parseInt(String(y).split('').reverse().join(''));
    if(ans > Math.pow(2, 31)-1){
        return 0;
    }
    if(x < 0){
        ans *= -1;
    }
    return ans;
};

const testcase1 = 123;
const testcase2 = -123;
const testcase3 = 120;

console.log(reverse(testcase1))
console.log(reverse(testcase2))
console.log(reverse(testcase3))