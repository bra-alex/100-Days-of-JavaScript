/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let r = 0
    let num = x < 0 ? x * -1 : x
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)

    while (num > 0) {
        let mod = num % 10
        r = r * 10 + mod
        num = Math.floor(num / 10)
    }
    r = x < 0 ? r * -1 : r

    return r < INT_MIN || r > INT_MAX ? 0 : r
};

console.log(reverse(-235));