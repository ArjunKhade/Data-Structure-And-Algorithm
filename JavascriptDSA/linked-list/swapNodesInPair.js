
// Recursive
var swapPairs = function(head) {
    // Base case: empty lists and single-node lists do not need swapping.
    if(!head || !head.next) return head;

    // l is the first node in the current pair, r is the second node.
    let l = head;
    let r = head.next;

     // Swap the remaining list first, then attach it after l.
     l.next = swapPairs(r.next);

     // Put r before l to complete the current pair swap.
     r.next= l;

     // r becomes the new head of this swapped pair.
     return r;

};



// Iterative 
var swapPairs = function(head) {
    // Empty lists and single-node lists are already "swapped".
    if(!head || !head.next) return head;

    // Dummy node keeps the head update simple when the first pair is swapped.
    let dummy = new ListNode();
    dummy.next = head;

    // p: node before the pair, c: first node in pair, n: second node in pair.
    let p = dummy;
    let c = head;
    let n = head.next;

    while(c && n){
       // Rewire p -> n -> c, then connect c to the rest of the list.
       p.next = n;
       c.next = n.next;
       n.next = c;
     
       // Move pointers to the next pair.
       p = c;
       c = p.next;
       n = c && c.next;
    }

    // dummy.next points to the new head after the first pair swap.
    return dummy.next;

};
