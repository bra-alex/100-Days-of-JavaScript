//Objects
//Abstraction
//Private properties and methods
/*
function Shape(){}

function Circle(radius) {
    // Instance Members
    this.radius = radius
    let defaultLocation = {x: 0, y: 0}

    //Getters & Setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        },
        set: function (value) {
            if(!value.x || !value.y)
                throw new Error('Invalid input')
            defaultLocation = value
        }
    })
}

function Square(size) {
    this.size = size 
}

//Prototypes
// Prototype Members
Circle.prototype.draw = function() {
    console.log('draw')
}

Circle.prototype.toString = function() {
    return 'Circle of radius ' + this.radius;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}
*/

//Iteration
//Object.keys returns instance members
//For-in loop returns all members

//Prototypical Inheritance
/*
Circle.prototype = Object.create(Shape.prototype)
*/

//Resetting the constructor
/*
Circle.prototype.constructor = Circle;
const circle = new Circle(20)

// Intermediate Function Inheritance
function inherit(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

inherit(Square, Shape)

const square = new Square()
*/

//Method Overriding
/*
Circle.prototype.duplicate = function() {
    console.log('duplicate Circle')
}

Square.prototype.duplicate = function() {
    console.log('duplicate square')
}
*/

//Polymorphism
/*
const shapes = [circle, square]

for (const shape of shapes) {
    shape.duplicate()
}
*/

//Mixins
/*
function mixin(Type, ...values){
    Object.assign(Type.prototype, ...values)
}

const canEat = {
    eat(){
        this.hunger--
        console.log('Eating')
    }
}

const canWalk = {
    walk(){
        this.distance++
        console.log('Walking')
    }
}

const canSwim = {
    swim(){
        this.move++
        console.log('swimming')
    }
}

function Person(){}
function Fish(){}

mixin(Person, canEat, canSwim, canWalk)
mixin(Fish, canEat, canSwim)

const person = new Person()
const fish = new Fish()
*/


//Classes
//Private properties using Symbol()
/*
const _defaultLocation = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius) {
        // Instance Members
        this.radius = radius
        this[_defaultLocation] = { x: 0, y: 0 }
    }

    [_draw]() {

    }
}
*/

//Private Properties using weakmap
/*
const _defaultLocation = new WeakMap()
const _draw = new WeakMap()

class Circle {
    constructor(radius) {
        // Instance Members
        this.radius = radius
        _defaultLocation.set(this, { x: 0, y: 0 })
        _draw.set(this, () => {
            console.log("draw")
        })
    }

    get defaultLocation() {
        return _defaultLocation.get(this)
    }

    set defaultLocation(value) {
        _defaultLocation.set(this, value)
    }
}
*/

//Modules   
//CommonJS
// module.exports = Circle;

//ES6
/*
const _defaultLocation = new WeakMap()
const _draw = new WeakMap()

export class Circle {
    constructor(radius) {
        // Instance Members
        this.radius = radius
        _defaultLocation.set(this, { x: 0, y: 0 })
        _draw.set(this, () => {
            console.log("draw")
        })
    }

    get defaultLocation() {
        return _defaultLocation.get(this)
    }

    set defaultLocation(value) {
        _defaultLocation.set(this, value)
    }
}
*/
