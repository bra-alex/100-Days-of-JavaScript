var removeDuplicates = function (nums) {
    let unique = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            delete nums[i]
        } else {
            unique.push(nums[i])
            delete nums[i]
        }
    }
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i]
    }
    return unique.length
}