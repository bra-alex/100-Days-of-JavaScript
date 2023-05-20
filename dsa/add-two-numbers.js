/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ptr1 = l1
    let ptr2 = l2
    let head = l1

    let sum = 0, carry = 0, num1 = 0, num2 = 0

    while (ptr1 || ptr2) {
        if (ptr1) {
            num1 = ptr1.val
            ptr1 = ptr1.next
        }
        if (ptr2) {
            num2 = ptr2.val
            ptr2 = ptr2.next
        }

        sum = num1 + num2 + carry
        carry = Math.floor(sum / 10)
        sum %= 10

        let n = new ListNode(sum)
        l1.next = n
        l1 = l1.next

        num1 = 0, num2 = 0, sum = 0
    }

    if (carry) {
        let n = new ListNode(carry)
        l1.next = n
        l1 = l1.next
    }

    return head.next
};