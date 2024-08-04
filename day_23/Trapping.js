// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    let l = 0, r = height.length-1, ans = 0;
    let lmax = Number.MIN_VALUE, rmax = Number.MIN_VALUE;
    while(l < r){
        lmax = Math.max(lmax, height[l]);
        rmax = Math.max(rmax, height[r]);

        ans += (lmax < rmax) ? lmax - height[l++] : rmax - height[r--]; 
    }
    return ans;
};

// 0 1 0 2 1 0 1 3 2 1 2 1     Array
// 0 1 1 2 2 2 2 3 3 3 3 3     Left Max
// 3 3 3 3 3 3 3 3 2 2 2 1     Right Max