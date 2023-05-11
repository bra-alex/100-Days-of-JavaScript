/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let num = 0
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const nextElement = s[i + 1]
        if (roman.get(element) < roman.get(nextElement)) num -= roman.get(element)
        else num += roman.get(element)
    }
    return num
};

console.log(romanToInt("LVIII"));