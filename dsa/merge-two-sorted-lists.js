/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let ptr = dummy

    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val <= list2.val) {
                dummy.next = new ListNode(list1.val)
                list1 = list1.next
            } else {
                dummy.next = new ListNode(list2.val)
                list2 = list2.next
            }
        } else if (list1) {
            dummy.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            dummy.next = new ListNode(list2.val)
            list2 = list2.next
        }
        dummy = dummy.next
    }

    return ptr.next
};

// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2
//     if (!list2) return list1

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };