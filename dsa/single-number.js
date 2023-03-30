// var singleNumber = function (nums) {
//     let left = 0
//     let right = 0
//     let num
//     while (left < nums.length) {
//         if (nums.length === 1) {
//             return nums[left]
//         }

//         if (right === left) {
//             right++
//             continue
//         }

//         if (right === nums.length) {
//             return num
//         }

//         if (nums[right] === nums[left]) {
//             left++
//             right = 0
//             continue
//         }

//         right++
//         num = nums[left]
//     }
// };

var singleNumber = function (nums) {
    const set = Array.from(new Set(nums))
    const reduce = (acc, cur) => acc + cur
    const setSum = set.reduce(reduce)
    const numSum = nums.reduce(reduce)
    return setSum * 2 - numSum
};

console.log(singleNumber([1]))