/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false

//     const sArr = s.split('').sort()
//     const tArr = t.split('').sort()

//     for (let i = 0; i < s.length; i++) {
//         if (sArr[i] !== tArr[i]) return false
//     }

//     return true
// };

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charCodeS = s.charCodeAt(i) - 97;
        const charCodeT = t.charCodeAt(i) - 97;

        freq[charCodeS]++;
        freq[charCodeT]--;
    }

    return freq.every((value) => value === 0);

}

console.log(isAnagram('anagram', 'nagaram'))