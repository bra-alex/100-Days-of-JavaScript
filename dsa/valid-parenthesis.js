/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
            count++
        } else {
            if (stack.length === 0) return false
            let top = stack[count - 1]
            if ((top === '(' && s[i] === ')')
                || (top === '{' && s[i] === '}')
                || (top === '[' && s[i] === ']')) {
                stack.pop()
                count--
            } else {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false
};
console.log(isValid('((()))[][][]'));