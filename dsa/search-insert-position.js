var searchInsert = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid

    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) return mid

        if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    if (nums[mid] - 1 >= target) return mid
    return mid + 1
};

console.log(searchInsert([2, 3, 4, 8, 10], 5));