//Function Declaration
/*
function walk() {
    console.log('walk')
}
*/

//Function Expression
//Anonymous
/*
const move = function(){
    console.log('move')
}
*/

//Named
/*
const activity = function run(){
    console.log('run')
}
*/

//Dynamic arguments
//Using arguments operator
/*
function sum() {
    let total = 0
    for (const value of arguments) 
        total += value
    return total
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
*/

//Using rest operator
//Extra arguments must come before the rest operator
/*
function multipleOfNumber(multiple, ...number){
    let check
    for (const value of number) {
        if(Array.isArray(value)){
            for (const num of value) {
                if(num % multiple === 0)
                        check = true
                    else
                        check = false
                    
                    console.log(num, check)
            }
        } else{        
            if(value % multiple === 0)
                    check = true
                else
                    check = false
                
                console.log(value, check)
        }
    }
}

multipleOfNumber(9, [9, 12, 23, 34, 45, 56, 67, 78, 89, 90], 1, 2, 3)
*/

// Default values
// When a default value is set, all parameters after must have a default value
// New value can be added assigned to a default
/*
function calculateInterest(principle, years, rate = 9) {
    return principle * rate / 100 * years
}

console.log(calculateInterest(100, 1))

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
*/

// Getters and Setters & Error Handling
/*
const person = {
    firstName: 'Alexander',
    lastName: 'Boakye',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(name){
        if (typeof name !== 'string')
            throw new Error('Value is not a string')

        const parts = name.split(' ')
        
        if (parts.length < 2)
            throw new Error('Enter a first and last name')

        person.firstName = parts[0]
        person.lastName = parts[parts.length - 1]
    }
}

try {
    person.fullName = 'Yaa Opare-Ansah'
} catch (e) {
    alert(e)
}

console.log(person)
*/

// This keyword
//In constructors, this -> object
/*
function Video(title){
    this.title = title
    console.log(this)
}

const v = new Video('b')
*/

//In functions, this -> window/global
/*
function showThis() {
    console.log(this)
}

showThis()
*/

//In methods, this -> object
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        //Changing this
        //Setting this to a different value before a callback function

        // const self = this

        //Using .bind()
        //Using arrow functions
        this.tags.forEach(tags =>
            //In callback functions, this -> window/global
            //Can be changed by referencing a different object 

            // console.log(self.title, tags)
            console.log(this.title, tags)

        )//.bind(this)
    }
}
video.showTags()
*/


// Higher Order Functions
//Functions that take functions as parameters or return functions
/*
function randomHexaNumberGenerator() {
    console.log(Math.random().toString(16).substring(2,8))
}

function rgbColorGenerator() {
    const rgbValues = Array(3).fill(0).map((_, i) => Math.floor(Math.random() * 255) + 1).join(',')
    console.log(`rgb(${rgbValues})`) 
}

setInterval(randomHexaNumberGenerator, 2000) //runs function at a constant time interval
setTimeout(rgbColorGenerator, 2000) //runs function after a set time
*/
