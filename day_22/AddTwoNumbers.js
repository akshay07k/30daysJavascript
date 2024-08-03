// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let temp = new ListNode();
    let res = temp;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        temp.next = new ListNode(num);
        temp = temp.next;
    }

    return res.next;    
};