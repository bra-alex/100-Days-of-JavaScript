class MyStack {
    constructor() {
        this.element = {}
        this.head = 0
        this.end = 0
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.element[this.end] = x
        this.end++
    }
    /**
     * @return {number}
     */
    pop() {
        const num = this.element[this.end - 1]
        delete this.element[this.end - 1]
        this.end--
        return num
    }
    /**
     * @return {number}
     */
    top() {
        return this.element[this.end - 1]
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.end - this.head === 0
    }
}





/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */