type BinaryTree = {
	value: number
	left?: BinaryTree
	right?: BinaryTree
}

export const sumTree = (BTree: BinaryTree) => {
	let result = BTree.value
	if (BTree.left) result += sumTree(BTree.left)
	if (BTree.right) result += sumTree(BTree.right)
	return result
}
