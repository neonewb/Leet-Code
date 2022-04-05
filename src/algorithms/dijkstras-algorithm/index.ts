type Weight = number

type EdgesWithWeight = {
  [node: string]: Weight
}

export type Graph = {
  [node: string]: EdgesWithWeight
}

type Distance = number

type Distances = {
  [node: string]: Distance
}

export const DijkstrasAlgorithm = (
	graph: Graph,
	startNode: string,
	endNode: string
) => {
	const visited: string[] = []
	const distances: Distances = {}
	let neighbors: EdgesWithWeight = {} 

	for (const node in graph) {
		if (node !== startNode) {
			const value = graph[startNode][node]
			distances[node] = value || Infinity
		}
	}

	let node = findNodeLowestCost(distances, visited)

	while (node) {
		const distance = distances[node]
		neighbors = graph[node]

		for (const neighbor in neighbors) {
			const newDistance = distance + neighbors[neighbor]
			if (newDistance < distances[neighbor]) {
				distances[neighbor] = newDistance
			}
		}
		visited.push(node)
		node = findNodeLowestCost(distances, visited)
	}

	return distances
}

function findNodeLowestCost(distances: Distances, processed: string[]) {
	let lowestCost = Infinity
	let lowestNode: string | undefined

	for (const node in distances) {
		const distance = distances[node]
		if (distance < lowestCost && !processed.includes(node)) {
			lowestCost = distance
			lowestNode = node
		}
	}

	return lowestNode
}
