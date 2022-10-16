//Objects
//Creating Objects
// 
/*
const circle = {
    radius: 15,
    location : {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw')  
    }
}
circle.draw()
*/

//Adding properties
/*
circle.color = 'blue'
circle.stroke = 1
*/

//Deleting properties
/*
delete circle.color
delete circle.stroke
delete circle.draw
delete circle.location.x

console.log(circle)
*/

//Factory function
/*
function createCircle(radius) {
    return{
        radius,
        draw(){
            console.log('draw')  
        }
    }
}
const circle1 = createCircle(1)
console.log(circle1)
*/

//Constructor Functions
/*
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(3)
*/

//Enumerating Objects
/*
const cars = {
    make: 'BMW', 
    model: 'M5 CS', 
    year: 2022, 
    bhp: 627
}

for (const car in cars) console.log(cars[car])

if('make' in cars) console.log(cars.make)

for (const keys of Object.keys(cars)) console.log(keys) 

for (const elements of Object.entries(cars)) console.log(elements)
*/

//Cloning objects
/*
//Using for-in loop
const another = {}

for (const key in circle) another[key] = circle[key]

//Using Object.assign
const another = Object.assign({}, circle)

// Using spread operator
const another = {...circle}

console.log(another)
*/
