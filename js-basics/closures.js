//Function in functions that use variables of outer function
function count(){
    let count = 0
    function increaseCount(){
        count++
        return count
    }

    function decreaseCount(){
        count--
        return count
    }

    return{
        increaseCount,
        decreaseCount
    }
}

const counter = count()

console.log(counter.increaseCount())
console.log(counter.increaseCount())
console.log(counter.increaseCount())
console.log(counter.decreaseCount())
console.log(counter.decreaseCount())
console.log(counter.decreaseCount())