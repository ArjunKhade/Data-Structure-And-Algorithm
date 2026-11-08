package linkedlist;

/**
 * Problem: Detect a Cycle in a Linked List
 * Algorithm: Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
 *
 * Time Complexity: O(N) where N is the total number of nodes in the linked list.
 * Auxiliary Space Complexity: O(1) as only two pointer references (slow and fast) are maintained.
 */
public class LinkedListCycle {

    // Definition for singly-linked list node
    public static class ListNode {
        public int val;
        public ListNode next;

        public ListNode(int val) {
            this.val = val;
            this.next = null;
        }
    }

    /**
     * Determines whether the linked list has a cycle using two pointers.
     *
     * @param head Head node of the singly-linked list.
     * @return true if a cycle exists, false otherwise.
     */
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;         // moves 1 step
            fast = fast.next.next;    // moves 2 steps

            if (slow == fast) {
                return true;          // slow and fast met -> cycle detected
            }
        }

        return false;                 // fast reached null -> no cycle
    }

    // --- Self-Testing / Runnable Verification ---
    public static void main(String[] args) {
        // Test Case 1: List with cycle [3 -> 2 -> 0 -> -4 -> (points back to 2)]
        ListNode head1 = new ListNode(3);
        ListNode node2 = new ListNode(2);
        ListNode node0 = new ListNode(0);
        ListNode nodeNeg4 = new ListNode(-4);

        head1.next = node2;
        node2.next = node0;
        node0.next = nodeNeg4;
        nodeNeg4.next = node2; // cycle back to node 2

        System.out.println("Test 1 (Has Cycle): " + hasCycle(head1) + " (Expected: true)");

        // Test Case 2: List without cycle [1 -> 2 -> 3 -> null]
        ListNode head2 = new ListNode(1);
        head2.next = new ListNode(2);
        head2.next.next = new ListNode(3);

        System.out.println("Test 2 (No Cycle): " + hasCycle(head2) + " (Expected: false)");

        // Test Case 3: Single node without cycle [1 -> null]
        ListNode head3 = new ListNode(1);
        System.out.println("Test 3 (Single node, no cycle): " + hasCycle(head3) + " (Expected: false)");

        // Test Case 4: Single node with self cycle [1 -> 1]
        ListNode head4 = new ListNode(1);
        head4.next = head4;
        System.out.println("Test 4 (Self cycle): " + hasCycle(head4) + " (Expected: true)");

        // Test Case 5: Empty list (null)
        System.out.println("Test 5 (Empty list): " + hasCycle(null) + " (Expected: false)");
    }
}
