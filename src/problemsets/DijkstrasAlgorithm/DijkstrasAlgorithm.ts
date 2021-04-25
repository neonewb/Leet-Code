type Weight = number

type EdgesWithWeight = {
  [node: string]: Weight
}

export type Graph = {
  [node: string]: EdgesWithWeight
}

type Costs = {
  [node: string]: number
}

export const DijkstrasAlgorithm = (
  graph: Graph,
  rootNode: string,
  searchNode: string
) => {
  const costs: Costs = {}
  const processed: string[] = []
  let neighbors = {}

  for (const node in graph) {
    if (node !== rootNode) {
      const value = graph[rootNode][node]
      costs[node] = value || Infinity
    }
  }

  let node = findNodeLowestCost(costs, processed)

  while (node) {
    const cost = costs[node]
    neighbors = graph[node]

    for (const neighbor in neighbors) {
      let newCost = cost + neighbors[neighbor]
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
      }
    }
    processed.push(node)
    node = findNodeLowestCost(costs, processed)
  }

  return costs
}

function findNodeLowestCost(costs: Costs, processed: string[]) {
  let lowestCost = Infinity
  let lowestNode: string

  for (const node in costs) {
    let cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestNode = node
    }
  }

  return lowestNode
}
