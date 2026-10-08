/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    // Empty lists and single-node lists stay the same after rotation.
    if(!head || !head.next) return head;

    // Count the total number of nodes so k can be reduced if it is too large.
    let length = 0;
    let curr = head;

    while(curr){
        curr = curr.next;
        length++;
    }

     // Rotating by the list length gives the same list, so keep only the remainder.
     k = k % length;

    // Keep f k nodes ahead of s. When f reaches the end, s is before the new head.
    let f = head;
    let s = head;
    for(let i=0; i<k; i++){
         f = f.next;   
    }

    // Move both pointers until f reaches the last node.
    while(f.next){
        f = f.next;
        s= s.next;
    }

    // Connect the old tail to the old head, then break at the new tail.
    f.next = head;
    let newHead = s.next;
    s.next = null;
    
    return newHead;
};
