export type Graph = number[][]

export const breadthFirstSearch = (graph: Graph, rootNode: number) => {
	const nodesLen: {[key: number]: number} = {}

	for (let i = 0; i < graph.length; i++) {
		nodesLen[i] = Infinity
	}

	nodesLen[rootNode] = 0

	const queue = [rootNode]

	while (queue.length) {
		const currNode = queue.shift() as number

		const curNodeConnected = graph[currNode]
		const neighborIdx = []
		let idx = curNodeConnected.indexOf(1)

		while (idx != -1) {
			neighborIdx.push(idx)
			idx = curNodeConnected.indexOf(1, idx + 1)
		}

		for (let i = 0; i < neighborIdx.length; i++) {
			if (nodesLen[neighborIdx[i]] === Infinity) {
				nodesLen[neighborIdx[i]] = nodesLen[currNode] + 1
				queue.push(neighborIdx[i])
			}
		}
	}

	return nodesLen
}
