//Creating empty arrays
// Using Array constructor
// const arr = Array(8)//allocates length

//Using square brackets
// const arr = []

//Adding elements
//Static values
/*
const arr = Array(9).fill('Y')
console.log(arr)
let numbers = [3, 4]
//Beginning
numbers.unshift(1, 2)
//Middle
numbers.splice(((numbers.length / 2) - 1), 0, 'a','b')
//End
numbers.push(5, 6)

console.log(numbers)
*/

//Finding elements
//Primitive types
/*
numbers = [1, 2, 3, 4]

console.log(numbers.indexOf(2)) //Returns -1 if not found
console.log(numbers.lastIndexOf(4)) //Returns -1 if not found
console.log(numbers.includes(3))
*/

//Reference types
//Use find()/findIndex()
/*
let cars = [
    {
        make: 'BMW',
        model: '330i',
        year: 2022,
        bhp: 269
    },
    {
        make: 'BMW',
        model: 'M5 CS',
        year: 2022,
        bhp: 627
    }
]

// const car = cars.find(function(car){
//     return car.model === 'M5 CS' //Produces undefined if the condition returns false
// })

// const carIndex = cars.findIndex(function(car){
//     return car.model === '330i' //Produces -1 if the condition returns false
// })

//Using arrow functions
const car = cars.find(car => car.model === 'M5 CS') //Produces undefined if the condition returns false

const carIndex = cars.findIndex(car => car.model === '330i' )//Produces -1 if the condition returns false

console.log(car)
console.log(carIndex)
*/

//Removing elements of an array
/*
numbers = [1, 2, 3, 4]
//Beginning
console.log(numbers.shift())

//Middle
numbers.splice(0, 2)
numbers.splice(0, 2, 1, 2, 3)//removes two items and adds three items
console.log(numbers)

//End
console.log(numbers.pop())
*/

//Emptying an array
/*
numbers = [1, 2, 3, 4]
let another = numbers
//Solution 1
numbers = [] //Best if there are no references to the original array

//Solution 2
numbers.length = 0

console.log(another)

//Solution 3
numbers.splice(0, numbers.length)
*/

//Combining arrays
/*
//For reference types, they're copied by reference
//For primitive types, they're copied by value

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]
const arrWReference = [
    {make: 'BMW', model: '330i', year: 2022, bhp: 269},
    {make: 'BMW', model: 'M5 CS', year: 2022, bhp: 627}
]

// const combined1 = arr1.concat(arr2)
// const combined2 = arr2.concat(arrWReference)
// const combinedAll = arr1.concat(arr2, arrWReference)

//Spread operator

const combined1 = [...arr1, ...arr2]
const combined2 = [...arr2, ...arrWReference]
const combinedAll = [...arr1, ...arrWReference, ...arr2]

console.log(combined1)
console.log(combined2)
console.log(combinedAll)
*/

//Dividing arrays
/*
const slice1 = combined1.slice(4, 7)
const slice2 = combined2.slice(4)
const sliceAll = combinedAll.slice()//Creates a copy

console.log(slice1)
console.log(slice2)
console.log(sliceAll)
*/

//Iterating an array
// numbers.forEach((number, index) => console.log(index, number))

//Joining arrays
// console.log(numbers.join(' '))

//Sorting arrays
//Primitive Types
/*
console.log(numbers.sort())
console.log(numbers.reverse())
*/

//Reference Types
/*
cars = [
    {make: 'BMW', model: 'M5 CS', year: 2022, bhp: 627},
    {make: 'BMW', model: '330i', year: 2022, bhp: 269},
    {make: 'Audi', model: 'RS7', year: 2022, bhp: 600},
    {make: 'Audi', model: 'A3', year: 2022, bhp: 165}
]

const sortedCars = cars.sort((carA, carB) => {
    if (carA.bhp < carB.bhp) return -1
    if (carA.bhp > carB.bhp) return 1
    return 0
}).reverse()

console.log(sortedCars)
*/

//Testing arrays
/*
//every() makes sure all conform to the condition
//some() makes sure at least one conforms to the condition
numbers = [-10, -9, -8, -6, -5, -4, -3, -2, -1, '0']
const onlyNumbers = numbers.every(value => typeof value === 'number')
if (onlyNumbers){
    const containsPositive = numbers.some(value => value >= 0)

    if (containsPositive)
        console.log('Has positive values')
    else
        console.log('Has no positive value')
}else
    console.log('Has a string value')
*/

//Filtering arrays
/*
numbers = [-10, -9, -8, -6, -5, -4, -3, -2, -1, '0', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtered = numbers
    .filter(value => value >= 0 && typeof value === 'number')
    .map(value => ({value: value}))
    .filter(n => n.value <= 5)
    .map(n => n.value)

console.log(filtered)
*/

//Reducing Arrays(bringing all values into 1)
/*
numbers = [-10, -9, -8, -6, -5, -4, -3, -2, -1, '0', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers
    .filter(n => typeof n === 'number')
    .reduce(
        (accumulator, currentValue) => accumulator + currentValue
    )

console.log(sum)
*/