// Test for palindromeLinkList.js

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    //go till the middle
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse second half
    let prev = null;
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    //check Palindrome
    let first = head, second = prev;
    while(second){
        if(first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
}

// Test cases
let head1 = new ListNode(1, new ListNode(2, new ListNode(1))); // true
console.log(isPalindrome(head1));

let head2 = new ListNode(1, new ListNode(2, new ListNode(2))); // false
console.log(isPalindrome(head2));

let head3 = new ListNode(1); // true
console.log(isPalindrome(head3));

let head4 = null; // true
console.log(isPalindrome(head4));