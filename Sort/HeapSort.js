/*
* 堆排序的灵魂在于 headpify 方法
* 本次以大根堆为例，描述建堆、heapify 以及 使用堆进行排序的方法
* */

class Heap {
    constructor(tree=[]) {
        this.tree = tree
        this.capacity = tree.length
    }

    heapify(tree, len, start) {
        /*
        * tree 是堆的数组，n是堆的长度，start是本次堆调整的父节点
        * */
        if (start >= len) { // 退出条件，当只剩1个节点时，不需要调整了
            return
        }

        let left = start * 2 + 1
        let right = start * 2 + 2

        let max = start
        if (left < len && tree[max] < tree[left]) {
            max = left
        }

        if (right < len && tree[max] < tree[right]) {
            max = right
        }

        if (max != start) {
            this.swap(tree, start, max)
            this.heapify(tree, len, max)
        }
        this.tree = tree
    }

    swap(tree, i, j) {
        let temp = tree[i]
        tree[i] = tree[j]
        tree[j] = temp
    }

    buildHeap(tree) {
        if (!tree || !tree.length || tree.length === 1) {
            return tree
        }

        let start = Math.floor((tree.length - 1) / 2)

        for (let i = start; i>=0; i--) {
            this.heapify(tree, tree.length, i)
        }
        this.tree = tree
    }

    heapSort(tree) {
        if (!tree || !tree.length || tree.length === 1) {
            return tree
        }

        this.buildHeap(tree)
        for (let len=tree.length; len>1; len--) {
            this.swap(tree, len-1, 0) // 把堆首和最末尾元素进行交换，这样就确保了当前最大元素放到了最后，然后调整堆（调整前把长度-1）
            this.heapify(tree, len-1, 0)
        }
    }
}

arr = [2, 4, 1, 0, 3, 7, 5, 8, 6] // 9个
// s.buildHeap(arr)
// console.log(arr) // [8, 6, 7, 4, 3, 1, 5, 0, 2] 已经是一个大根堆了，但毫无疑问不是有序数组，需要配合算法才能完成堆排序
s = new Heap(arr)
s.heapSort(arr)
console.log(arr) // [0, 1, 2, 3, 4, 5, 6, 7, 8]




