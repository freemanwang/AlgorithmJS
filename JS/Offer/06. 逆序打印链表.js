class Node {
    constructor(val=0, next=null) {
        this.val = val
        this.next = next
    }
}
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)

var solution = function (head) {
    if (!head) {
        return
    }
    if (!head.next) {
        console.log(head.val)
        return;
    }

    let stack = []

    node = head
    while (node) {
        stack.push(node)
        node = node.next
    }

    // console.log(stack)

    while (stack.length) {
        temp = stack.pop()
        console.log(temp.val)
    }

}

solution(head)

var solution2 = function (head) { // 递归做法，但如果链过长，调用层级过深，总体上不如上述栈方法
    if (!head) {
        return
    }
    if (!head.next) {
        console.log(head.val)
        return;
    }

    function recur(node) {
        if (!node) {
            return
        }
        recur(node.next)
        console.log(node.val)
    }
    recur(head)

}

solution2(head)
