/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function (nums, k) {
//     let r = 1
//     for (let i = 0; i < nums.length; i++) {
//         while (r < nums.length) {
//             if (nums[i] === nums[r] && Math.abs(i - r) <= k) return true
//             r++
//         }
//         r = i + 2
//     }
//     return false
// };
var containsNearbyDuplicate = function (nums, k) {
    let map = [];
    for (let i = 0; i < nums.length; i++) {
        // first case will be undefined in map & hence NAN
        if (i - map[nums[i]] <= k) {
            return true;
        } else {
            map[nums[i]] = [i];
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));