/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        const idx = s.indexOf(s[i])
        if (idx === s.lastIndexOf(s[i])) return idx
    }
    return -1
};

console.log(firstUniqChar('aabb'));