/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        //store the ref of next element 
        let temp = curr.next;
        //point curr.next to previous
        curr.next = prev;
        //make prev to current 
        prev = curr;
        //move curr to next
        curr = temp;
    }
    //return the head donoting
    return prev;
};