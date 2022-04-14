// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

export const maxProfit = (prices: number[]): number => {
	let maxProfit = 0
	let currentMin = prices[0]

	for (let i = 0; i < prices.length; i++) {
		const price = prices[i]

		maxProfit = Math.max(maxProfit, price - currentMin)
		currentMin = Math.min(currentMin, price)
	}

	return maxProfit
}
