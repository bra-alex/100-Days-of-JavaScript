/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// var numJewelsInStones = function (jewels, stones) {
//     const arr = new Array(60).fill(0)

//     for (let i = 0; i < stones.length; i++) {
//         for (let j = 0; j < jewels.length; j++) {
//             const stoneIdx = stones.charCodeAt(i) - 65
//             const jewelIdx = jewels.charCodeAt(j) - 65

//             console.log(jewelIdx);
//             if (stoneIdx === jewelIdx)
//                 arr[jewelIdx]++
//         }
//     }
//     return arr.reduce((a, b) => a + b)
// };

var numJewelsInStones = function (jewels, stones) {
    let count = 0

    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) !== -1) count++
    }
    return count
};

console.log(numJewelsInStones('evr', 'fsdelqgvwn'));