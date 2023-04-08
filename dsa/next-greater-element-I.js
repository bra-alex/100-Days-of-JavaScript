/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//     let ans = []
//     for (let i = 0; i < nums1.length; i++) {
//         let j = nums2.indexOf(nums1[i])
//         if (j === nums2.length - 1) {
//             ans.push(-1)
//             continue
//         }
//         let k = j
//         while (k < nums2.length) {
//             if (nums2[j] < nums2[k]) {
//                 ans.push(nums2[k])
//                 break
//             }
//             k++
//         }
//         if (!ans[i]) ans.push(-1)
//     }

//     return ans
// };

var nextGreaterElement = function (nums1, nums2) {
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        let j = nums2.indexOf(nums1[i])
        while (j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                ans.push(nums2[j])
                break
            }
            if (j === nums2.length - 1) {
                ans.push(-1)
            }
            j++
        }
    }

    return ans
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));