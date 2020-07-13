class Queue {
    constructor(capacity=Infinity) { // 是否需要设置队伍长度
        this.stack1 = []
        this.stack2 = []
        this.capacity = capacity
    }

    /*
    * appendTail: 将加入的内容push进stack1，先加入的永远在前;    T = 1
    *
    * deleteHaed: stack1 pop -> stack2;把stack1中最后一个给return，然后把stack2 pop -> stack1;   T = n
    *
    * */
    appendTail(val) {
        this.stack1.push(val)
    }

    deleteHead() {
        if (this.isEmpty()) {
            return null
        }

        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop())
        }
        let head = this.stack1.pop()
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop())
        }
        return head
    }

    isEmpty() {
        return this.stack1.length === 0
    }

    isFull() {

    }

    printQueue() {
        console.log(this.stack1)
    }
}

queue = new Queue()
queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)
queue.appendTail(4)
queue.appendTail(5)
queue.printQueue()
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
queue.printQueue()
queue.appendTail(6)
queue.printQueue()

 

