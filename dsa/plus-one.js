// var plusOne = function (digits) {
//     let plus = BigInt(digits.join('')) + 1n
//     return ("" + plus).split("").map((digit) => +digit)
// };

var plusOne = function (digits) {
    let i = digits.length - 1
    while (i >= 0) {
        if (digits[i] === 9) {
            digits[i] = 0
            i--
        } else {
            digits[i]++
            break
        }
    }
    if (i < 0) digits.unshift(1)
    return digits;
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]))