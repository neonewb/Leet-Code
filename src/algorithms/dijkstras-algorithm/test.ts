import { DijkstrasAlgorithm, Graph } from './index'

describe("Dijkstra's Algorithm", () => {
	const graph: Graph = {
		a: { b: 2, c: 1 },
		b: { f: 7 },
		c: { d: 5, e: 2 },
		d: { f: 2 },
		e: { f: 1 },
		f: { g: 1 },
		g: {},
	}

	const output = {
		b: 2,
		c: 1,
		d: 6,
		e: 3,
		f: 4,
		g: 5,
	}

	test('sumTree', () => {
		expect(DijkstrasAlgorithm(graph, 'a', 'g')).toStrictEqual(output)
	})
})
