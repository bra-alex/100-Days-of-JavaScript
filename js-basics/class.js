//Class Declaration
//Like constructor functions
/*
class Person{
    constructor(
        firstName = 'Alexander', 
        lastName = 'Boakye', 
        gender = 'male',
        age = 55, 
        city = 'Kumasi'
        ){
        this.firstName = firstName
        this.lastName = lastName 
        this.gender = gender
        this.age = age 
        this.city = city
        this.score = 0
        this.skills = []
    }

    //Getters
    get getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }
    
    // Setters
    /**
     * @param {number} score
     [*]/
    set setScore(score){
        this.score += score
    }

    /**
     * @param {any} skill
     [*]/
    set setSkills(skill){
        this.skills.push(skill)
    }

    getPersonInfo(){
        let fullName = this.getFullName
        let pronoun = this.gender.toLowerCase() === 'male' ? 'He' : 'She'
        let skills = this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        if (this.skills.length === 1) 
            skills = this.skills.length > 0 && this.skills[this.skills.length - 1]
        
        let formattedSkills = skills ? `${pronoun} has these skills: ${skills.toLowerCase()}` : ''
        let info = `${fullName} is a ${this.age} years old ${this.gender} who lives in ${this.city}. ${formattedSkills}`

        return info
    }

    // Static methods
    //Work on the class itself
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()

        if (hours < 10) {
            hours = '0' + hours
        }

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }

}
*/

// Class instantiation
/*
const person1 = new Person()
const person2 = new Person('Kwame', 'Dross', 'male', 60, 'Accra')

person1.setSkills = 'Driving'
person1.setSkills = 'Coding'

person2.setSkills = 'Adwaman'
person2.setSkills = 'Code'

person1.setScore = person1.skills.length
person2.setScore = person2.skills.length
*/

//Methods
/*
console.groupCollapsed(person1.getFullName)
console.log(person1.getPersonInfo())
console.groupEnd()

console.groupCollapsed(person2.getFullName)
console.log(person2.getPersonInfo())
console.groupEnd()

console.groupCollapsed('Class')
console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
console.groupEnd()
*/

//Inheritance
/*
class Student extends Person{
    constructor(firstName, lastName, gender, age, city, position){
        //Override properties
        super(firstName, lastName, gender, age, city)
        this.position = position
        this.message = ''
    }

    /**
     * @param {any} message
     [*]/
    set getMessage(message){
        this.message += message
    }

    says(){
        return `${this.firstName} says: ${this.message}`
    }

    getPersonInfo(){
        let fullName = this.getFullName
        let pronoun = this.gender.toLowerCase() === 'male' ? 'He' : 'She'
        let skills = this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        if (this.skills.length === 1) 
            skills = this.skills.length > 0 && this.skills[this.skills.length - 1]
        
        let formattedSkills = skills ? `${pronoun} has these skills: ${skills.toLowerCase()}` : ''

        let position = this.position !== undefined ? this.position : 'a common floor member'

        let info = `${fullName} is a ${this.age} years old ${this.gender} who lives in ${this.city}. ${pronoun} is ${position} of her class. ${formattedSkills}`

        return info
    }
}

const student1 = new Student('Yaa', 'Opare-Ansah', 'Female', 20, 'Accra')
student1.setSkills = 'Cooking'
student1.setSkills = 'Talking'
student1.setSkills = 'Eating'
student1.setSkills = 'Hating men'

student1.getMessage = 'Fear men oo. Men are wicked. Men are not good people. '
student1.getMessage = `Witches are doing me. They don't like me. Every bad thing that happens to me is the work of witches.`

console.group(student1.getFullName)
console.log(student1.getPersonInfo())
console.log(student1.says())
console.groupEnd()
*/
