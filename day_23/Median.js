// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let i = 0;
    let j = 0;
    let lastindex = -1;

    let v = [];
    
    while(i<n1&&j<n2)
    {
        if(nums1[i]<=nums2[j])
            v[++lastindex]=nums1[i++];
        else
            v[++lastindex]=nums2[j++];
    }
    
    while(i<n1)
        v[++lastindex]=nums1[i++];
    while(j<n2)
        v[++lastindex]=nums2[j++];
    
    let n = n1 + n2;
    return n%2 != 0 ? v[Math.floor(n/2)] / 1.0 : (v[n/2]+v[n/2-1])/2.0 ;
        
};