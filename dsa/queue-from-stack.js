class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
        this.count = 0
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x)
        this.stack2 = [...this.stack1].reverse()
        this.count++
    }
    /**
     * @return {number}
     */
    pop() {
        let num = this.stack2[this.count - 1]
        delete this.stack2[this.count - 1]
        this.count--
        this.stack1 = [...this.stack2].reverse()
        return num
    }
    /**
     * @return {number}
     */
    peek() {
        return this.stack2[this.count - 1]
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.count === 0
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */