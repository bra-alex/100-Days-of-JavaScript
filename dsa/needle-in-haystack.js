/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let temp = ''
    for (let i = 0; i < haystack.length; i++) {
        let j = i
        let ptr = 0
        let count = 0
        while (haystack[j] == needle[ptr] && ptr < needle.length) {
            j++
            ptr++
            count++
        }
        if (count === needle.length) return i
    }
    return -1
};

console.log(strStr('hello', 'll'))