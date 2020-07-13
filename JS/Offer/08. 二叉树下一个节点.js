/*
要求找二叉树中序遍历的节点下一个节点
   1.   如果i节点有右子树，那么右子树最左的节点为所求
   2.   如果i节点无右子树，且位于父节点的左子树，那么下一个是父节点
   3.   如果i无右子树且是父节点的右子树节点，那么下一个是某一祖父节点，i节点位于该祖父节点左子树
   4.   如果i无右子树且是父节点右子树节点，往上找也没有找到祖父节点把i所在的树放在左侧，那么i没有下一个节点
* */
class Node {
    constructor(val, left, right, parent) {
        this.val = val
        this.left = left
        this.right = right
        this.parent = parent
    }
}

a = new Node('a', null, null, null)

b = new Node('b', null, null, a)
c = new Node('c', null, null, a)
a.left = b
a.right = c

d = new Node('d', null, null, b)
e = new Node('e', null, null, b)
b.left = d
b.right = e

f = new Node('f', null, null, c)
g = new Node('g', null, null, c)
c.left = f
c.right = g

h = new Node('h', null, null, e)
i = new Node('i', null, null, e)
e.left = h
e.right = i

// console.log(0, c.parent === a, b.parent === a, a)
// console.log(1, d.parent === b, d.parent === b, b)
// console.log(2, f.parent === c, f.parent === c, c)
// console.log(3, h.parent === e, h.parent === e, e)

var solution = function (root, node) {
    if (!root || !node)
        return

    // 1
    if (node.right) {
        node = preorder(node.right)
        // console.log(stack) // 这个stack放右子树右子树中续遍历的第一个节点，如果下一个节点
        return stack.pop()
    }

    // 2
    if (!node.right && node.parent.left === node) {
        return node.parent
    }

    // 3 & 4
    if (!node.right && node.parent.right === node) {
        parent = node.parent
        while (parent && parent.parent) {
            if (parent === parent.parent.left) {
                return parent.parent
            }
            parent = parent.parent
        }
        return false
    }
}

preflag = true
stack = []
var preorder = function (node) {
    if (!node || stack.length) {
        return
    }
    console.log(11)

    if (node.left) {
        preorder(node.left)
    }
    if (stack.length) {
        return;
    } else {
        stack.push(node)
    }
}


console.log(solution(a, b)) // b的下一个是h，正确
console.log(solution(a, d)) // b的下一个是b，正确
console.log(solution(a, f)) // f的下一个是c，正确


