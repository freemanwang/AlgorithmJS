preorder = [1, 2, 4, 7, 3, 5, 6, 8]
inorder = [4, 7, 2, 1, 5, 3, 8, 6]

class Node {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }

    // left(left) {
    //     this.left = left
    // }
    //
    // right() {
    //     this.right = right
    // }
}


var solution = function (preorder, inorder) {
    if (!preorder || !preorder.length || !inorder || !inorder.length || inorder.length !== preorder.length) {
        return
    }

    node = new Node(preorder[0])
    console.log('node1:', node)
    pivot = inorder.indexOf(preorder[0])

    inleft = []
    inright = []
    preleft = []
    preright = []

    for (let i=0; i<inorder.length; i++) {
        if (i < pivot) {
            inleft.push(inorder[i])
        } else if (i > pivot) {
            inright.push(inorder[i])
        }
    }

    for (let j=1; j<=inleft.length+inright.length; j++) {
        if (j <= inleft.length) {
            preleft.push(preorder[j])
        } else {
            preright.push(preorder[j])
        }
    }

    console.log(1, preleft)
    console.log(2, preright)
    console.log(3, inleft)
    console.log(4, inright)

    node.left = solution(preleft, inleft) // 这里有问题
    // console.log(5, left)
    node.right = solution(preright, inright) // 这里也有问题

    console.log('node2:', node)
    return node
}
// document.write("<script language=javascript src='../TreeOrder'></script>");
// require()
root = solution(preorder, inorder)
console.log('root:', root)
console.log('root.left:', root.left)
console.log('root.right:', root.right)


class Order {
    constructor(root, preorder=[], inorder=[], postorder=[]) {
        this.root = root
        this.preorder = []
        this.inorder = []
        this.postorder = []
    }

    preOrder(root) {
        if (!root) {
            return
        }
        this.preorder.push(root.val)
        this.preOrder(root.left)
        this.preOrder(root.right)
        return this.preorder
    }

    inOrder(root) {
        if (!root) {
            return
        }
        this.inOrder(root.left)
        this.inorder.push(root.val)
        this.inOrder(root.right)
        return this.inorder
    }

    postOrder(root) {
        if (!root) {
            return
        }
        this.postOrder(root.left)
        this.postOrder(root.right)
        this.postorder.push(root.val)
        return this.postorder
    }
}


// import Order from '../TreeOrder'
s = new Order(root)

console.log(s.preOrder())
console.log(s.inOrder())


