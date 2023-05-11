/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0
    let r = x

    while (r >= l) {
        let m = Math.ceil((l + r) / 2)

        let root = m * m

        if (root === x) return m
        else if (root > x) r = m - 1
        else l = m + 1
    }

    return r
};

console.log(mySqrt(4));