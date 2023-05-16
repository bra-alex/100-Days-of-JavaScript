class MyHashMap {
    constructor() {
        this.map = {}
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this[key] = value
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.hasOwnProperty(key) ? this[key] : -1
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this[key]
    }
}

const obj = new MyHashMap()
obj.remove(2)
obj.put(3, 11)
obj.put(4, 13)
obj.put(15, 6)
obj.put(6, 15)
obj.put(8, 8)
obj.put(11, 0)
obj.get(11)
obj.put(1, 10)
obj.put(12, 14)


