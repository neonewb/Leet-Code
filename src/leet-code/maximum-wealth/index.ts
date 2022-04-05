// https://leetcode.com/problems/richest-customer-wealth/

export function maximumWealth(accounts: number[][]): number {
	let output = 0

	accounts.forEach((account) => {
		if (account.length > 1) {
			account.reduce((acc, curr): number => {
				acc += curr
				if (acc > output) output = acc
				return acc
			})
		} else if (account.length === 1) {
			if (account[0] > output) output = account[0]
		}
	})
	return output
}
