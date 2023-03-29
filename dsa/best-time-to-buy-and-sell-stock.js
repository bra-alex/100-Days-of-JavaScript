var maxProfit = function (prices) {
    let left = 0
    let right = 1
    let maxProfit = 0

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = profit > maxProfit ? profit : maxProfit
        } else {
            left = right
        }
        right++
    }
    return maxProfit
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));