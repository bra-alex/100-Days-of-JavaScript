//Control Flow
//if-else
/*
let hour = new Date().getHours()

if (hour >= 6 && hour < 12)
    console.log('Good Morning')
else if(hour >= 12 && hour < 18)
    console.log('Good afternoon')    
else
    console.log('Good evening')

//Switch

let option;

switch (option) {
    case 'first':
        console.log('BMW')
        break;

    case 'second':
        console.log('Audi')
        break;
    
    case 'third':
        console.log('Honda')
        break;

    case 'fourth':
        console.log('Benz')
        break;

    case 'fifth':
        console.log('Toyota')
        break;

    default:
        console.log('Incorrect input')
        break;
}
*/
//Loops
/*
//For-Loop

for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0)
        console.log('even')
    else
        console.log('odd')
}

//While Loops
let i = 1
while (i <= 6) {
    if (i % 2 === 0)
        console.log(`${i}: even`)
    else
        console.log(`${i}: odd`)
    i++
}

//Do-While Loops
let i = 1
do {
    if (i % 2 === 0)
        console.log(`${i}: even`)
    else
        console.log(`${i}: odd`)
    i++
} while (i <= 5);

//for-in loop
//Best for objects
const car = {
    make: 'BMW',
    model: 'M5 CS',
    bhp: '627',
    torque: '553'
}

for (const key in car) {
    console.log(`${key}: ${car[key]}`)
}

//for of loops
const fastCars = ['BMW M5 CS', 'Mercedes Benz E63 AMG', 'Audi RS7 MTM']
for (const car of fastCars) {
    console.log(car)
}
*/

//Exercise
//Maximum of two numbers
/*
function MaxNumber(a, b) {
    return (a > b) ? a : b
}
console.log(MaxNumber(35, 20))
*/

//Landscape/Potrait
/*
function isLandscape(width, height){
    return (width > height)
}

console.log(isLandscape(45, 35))
*/

//FizzBuzz
/*
const output = FizzBuzz(7)
console.log(output)

function FizzBuzz(input) {
    if (typeof input !== 'number') 
        return 'Not a number'

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'

    if (input % 3 === 0)
        return 'Fizz'

    if (input % 5 === 0)
        return 'Buzz'
                              
    return input    
}
*/

//Speed Thingy
/*
checkSpeed(75);
function checkSpeed(speed){
    const limit = 70
    const kmPerPoint = 5
    if (speed < limit + kmPerPoint){
        console.log('Ok')
        return
    }
    const points = Math.floor((speed - limit) / kmPerPoint)

    if (points >= 12)
        console.log('License suspended')

    else
        console.log(points)
}
*/

//Show Numbers
/*
showNumbers(10)
function showNumbers(limit) {
    let i = 0
    while (i <= limit) {
        const type = (i % 2 === 0) ? 'EVEN' : 'ODD' 
        console.log(i, type)
        i++
    }
}
*/

//Count Truthy
/*
const array = [1, 2, 3, '', undefined, NaN, 'Me', null]
console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0
    for(let value of array) 
        if(value)
            count++
    return count
}
*/

//Show String Properties
/*
const car = {
    make: 'BMW',
    model: 'M5 CS',
    bhp: 627,
    torque: 553
}

showProperties(car)

function showProperties(obj){
    for (const key in obj) {
        const element = obj[key];
        
        if (typeof element === 'string') 
            console.log(key, element)
    }
}
*/

//Sum of multiples
/*
console.log(sum(15))

function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++) 
        if((i % 3 === 0) || (i % 5 === 0))
            sum += i

    return sum
}
*/

//Calculate Grade
/*
const array = [80, 90, 100]

console.log(calculateGrades(array))

function calculateGrades(marks) {
    const average = calculateAverage(marks)

    if (average < 60) 
        return 'F'

    if (average < 70) 
        return 'D'

    if (average < 80) 
        return 'C'

    if (average < 90) 
        return 'B'

    return 'A'
}

function calculateAverage(array) {
    let sum = 0
    for (let value of array) {
        sum += value
    }
    return sum / array.length
}
*/

//Print Stars
/*
showStars(20)
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let star = ''
        for (let j = 0; j < i; j++)
            star += '*'
        console.log(star)
        
    }
}
*/

//Show Primes
/*
showPrimes(10)

function showPrimes(limit) {
    for (let n = 2; n <= limit; n++)
        if (checkPrime(n))
            console.log(n)
}

function checkPrime(number) {
    for (let i = 2; i < number; i++)
        if(number % i === 0)
            return false
    return true
}
*/
