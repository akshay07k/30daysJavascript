// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    const mp = new Map();
    
    for(let i in nums){
        const y = target - nums[i];
        if(mp.has(y)){
            return [mp.get(y), i];
        }
        mp.set(nums[i], i);
    }
    return null;
};

const testcase1 = [2,7,11,15];
const testcase2 = [3,2,4];
const testcase3 = [3,3];

console.log(twoSum(testcase1, 9))
console.log(twoSum(testcase2, 6))
console.log(twoSum(testcase3, 6))
