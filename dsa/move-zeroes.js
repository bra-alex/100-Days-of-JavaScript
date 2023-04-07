/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0, r = 1, k = nums.length
    if (nums.length === 1) return
    while (r > l && r <= k - 1) {
        if (nums[l] === 0 && nums[r] != 0) {
            let temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            r++
            l++
        } else if (nums[l] === 0 && nums[r] == 0) {
            r++
        } else {
            l++
            r++
        }
    }
};