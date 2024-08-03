// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let low = i + 1;
        let high = n - 1;

        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high];

            if (sum < 0) {
                low++;
            } else if (sum > 0) {
                high--;
            } else {
                result.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                while (low < high && nums[low] === nums[low - 1]) low++;
                while (low < high && nums[high] === nums[high + 1]) high--;
            }
        }
    }

    return result;
};