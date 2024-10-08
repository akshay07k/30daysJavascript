// https://leetcode.com/problems/merge-k-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } 
    else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeKLists = function(lists){
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
};