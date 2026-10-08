
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set  = new Set();

    while(headB){
        set.add(headB);
        headB = headB.next;
    }

    while(headA){
        if(set.has(headA)) return headA;
        headA = headA.next;
    }

    return null;
};

//better approach
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;

    while(p1 != p2){
     p1 = p1 == null ? headB :p1.next;
     p2 = p2 == null ? headA :p2.next;
    }

    return p1;
};