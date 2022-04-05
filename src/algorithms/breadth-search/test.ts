import { breadthFirstSearch, Graph } from './index'

describe('Breadth First Search', () => {
	const graph: Graph = [
		[0, 1, 1, 1, 0, 0],
		[0, 0, 1, 0, 0, 0],
		[1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0],
		[0, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0],
	]

	const output = {
		0: 3,
		1: 1,
		2: 2,
		3: 4,
		4: 0,
		5: Infinity,
	}

	test('sumTree', () => {
		expect(breadthFirstSearch(graph, 4)).toStrictEqual(output)
	})
})
