/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     let num = x.toString()
//     num = num.split('').reverse().join('')
//     return x == num
// };
var isPalindrome = function (x) {
    let originalNum = x
    let reversedNum = 0

    if (originalNum < 0) return false

    while (originalNum > 0) {
        let mod = originalNum % 10
        reversedNum = reversedNum * 10 + mod
        originalNum = Math.floor(originalNum / 10)
    }

    return x === reversedNum
};

console.log(isPalindrome(155))