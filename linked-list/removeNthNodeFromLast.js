
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let length = 0;
    while(head){
        head = head.next;
        length++;
    }

    let prePos = length - n;
    let prev = sentinal;
    for(let i=0; i<prePos; i++){
       prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinal.next;
    
};