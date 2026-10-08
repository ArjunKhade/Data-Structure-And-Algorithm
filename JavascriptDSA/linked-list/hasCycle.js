/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    let set = new Set();
    while(curr != null){
        if(set.has(curr)){
            return true;
        }else{
            set.add(curr);
        }
        curr = curr.next;
    }
    return false;
};


// floyds cycle algo using slow and fast pointer
var hasCycle = function(head) {
    if(!head) return false;
    let slow  = head;
    let fast = head.next;
    while(slow !== fast){
        if(!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};