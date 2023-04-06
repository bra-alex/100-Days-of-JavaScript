/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let r = 0
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)

    if (x < 0) {
        x *= -1
        while (x > 0) {
            let mod = x % 10
            r = r * 10 + mod
            x = Math.floor(x / 10)
        }
        r *= -1
    } else {
        while (x > 0) {
            let mod = x % 10
            r = r * 10 + mod
            x = Math.floor(x / 10)
        }
    }

    return r < INT_MIN || r > INT_MAX ? 0 : r
};

console.log(reverse(-235));