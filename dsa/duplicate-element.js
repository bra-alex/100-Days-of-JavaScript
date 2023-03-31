var containsDuplicate = function (nums) {
    let left = 0
    let right = 1
    nums.sort((a, b) => a - b)
    while (left < nums.length) {
        if (nums[left] === nums[right]) {
            return true
        }
        left++
        right = left + 1
    }
    return false
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));