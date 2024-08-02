// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2){
        return list1 ? list1 : list2;
    }
    let head, temp;
    if(list1.val < list2.val){
        head = list1;
        list1 = list1.next;
    }
    else{
        head = list2;
        list2 = list2.next;
    }
    temp = head;
    while(list1 && list2){
        if(list1.val < list2.val){
            temp.next = list1;
            list1 = list1.next;
        }
        else{
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if(list1){
        temp.next = list1;
    }
    else{
        temp.next = list2;
    }
    return head;
};
