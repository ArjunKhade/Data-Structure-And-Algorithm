/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // 1. Find the middle of the list
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;
    let curr = slow;
    while(curr){
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // 3. Check if the values match
    let isPalindrome = true;
    let leftSide = head, rightSide = prev;
    let secondHalfCopy = prev; // Keep reference to reverse back later

    while(rightSide){
        if(leftSide.val !== rightSide.val) {
            isPalindrome = false;
            break;
        }
        leftSide = leftSide.next;
        rightSide = rightSide.next;
    }

    // 4. (Optional) Restore the list to its original state
    curr = secondHalfCopy;
    let restorePrev = null;
    while(curr){
        let nextTemp = curr.next;
        curr.next = restorePrev;
        restorePrev = curr;
        curr = nextTemp;
    }

    return isPalindrome;
};