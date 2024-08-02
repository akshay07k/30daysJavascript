// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    let stack = [];

    for(let ch of s){
        if(ch == '(' || ch == '{' || ch == '['){
            stack.push(ch);
        }
        else{
            if(ch == ')' && stack.slice(-1) != '('){
                return false;
            }
            else if(ch == '}' && stack.slice(-1) != '{'){
                return false;
            }
            else if(ch == ']' && stack.slice(-1) != '['){
                return false;
            }
            else{
                stack.pop();
            }
        }
    }
    if(stack.length > 0) return false;
    return true;
};

const testcase1 = "()";
const testcase2 = "()[]{}";
const testcase3 = "(]";

console.log(isValid(testcase1))
console.log(isValid(testcase2))
console.log(isValid(testcase3))