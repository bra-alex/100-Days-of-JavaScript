//Objects
//Abstraction
//Private properties and methods
function Circle(radius) {
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

    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle()
