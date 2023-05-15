/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const nums2Set = new Set(nums2)

    const intersection = new Set(nums1.filter(num => nums2Set.has(num)))

    return [...intersection]
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));