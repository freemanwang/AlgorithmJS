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
    }

    inOrder(root) {
        if (!root) {
            return
        }
        this.inOrder(root.left)
        this.preorder.push(root.val)
        this.inOrder(root.right)
    }

    postOrder(root) {
        if (!root) {
            return
        }
        this.postOrder(root.left)
        this.postOrder(root.right)
        this.preorder.push(root.val)
    }
}
