/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0, count = 0

    for (let i = 0; i < nums.length; i++) {
        count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) count++
        }
        if (count < 2) sum += nums[i]
    }

    return sum
};

console.log(sumOfUnique([1, 2, 3, 4, 5]));