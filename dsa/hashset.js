// class MyHashSet {
//     constructor() {
//         this.set = []
//     }
//     /**
//      * @param {number} key
//      * @return {void}
//      */
//     add(key) {
//         const i = this.set.indexOf(key)
//         if (i < 0) this.set.push(key)
//     }
//     /**
//      * @param {number} key
//      * @return {void}
//      */
//     remove(key) {
//         const i = this.set.indexOf(key)
//         if (i >= 0) this.set.splice(i, 1)
//     }
//     /**
//      * @param {number} key
//      * @return {boolean}
//     */
//     contains(key) {
//         const i = this.set.indexOf(key)
//         return i >= 0 ? true : false
//     }
// }

class MyHashSet {
    constructor() {
        this.set = {}
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this[key] = null
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this[key]
    }
    /**
     * @param {number} key
     * @return {boolean}
    */
    contains(key) {
        return this.hasOwnProperty(key)
    }
}



