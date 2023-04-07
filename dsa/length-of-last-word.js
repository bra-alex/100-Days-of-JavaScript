/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const words = s.split(' ')
    const stack = []
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            stack.push(words[i])
            count++
        }
    }
    return stack[count - 1].length
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));