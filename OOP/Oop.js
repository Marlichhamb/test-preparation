//Классы

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce () {
        if (this.age < 0) {
            console.log(`${this.name} doesnt exist yet!`)
        } else {
            console.log(`Hey! My name is ${this.name} and I am ${this.age} years old!`)
        }
    }

    haveBirthday() {
        this.age += 1;
        if (this.age < 0) {
            console.log(`Sorry, ${this.name}, you dont exist yet!`)
        } else {
            console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old!`)
        }
    }
}

const person1 = new Person('Yaroslav', -2)
person1.introduce()
person1.haveBirthday()
const person2 = new Person ('Kirill', 25)
person2.introduce()
person2.haveBirthday()

// Инкапсуляция

class Product  {
    #price
    constructor(name, price) {
        this.name = name
        this.#price = price > 0 ? price : 0
    }

    get price() {
        return this.#price
    }

    set price(amount) {
        if(amount >= 2000) {
            console.log(`Your total amount is ${amount}, so you are available for a discount`)
            this.#price = amount - (amount * 0.1)
            console.log(`New price is ${this.#price}`)
        } else {
            console.log('недостаточная сумма для применения скидки')
        }
    }
}

const product1 = new Product('pen', 6000)
console.log(product1.price, product1.name)
product1.price = 6000
console.log(product1.price)

// Наследования

// class Vehicle {
//
//     constructor(name) {
//         this.name = name
//     }
//
//     move(){
//         console.log('The vehicle is moving')
//     }
// }
//
// class Car extends Vehicle{
//
//     move() {
//         super.move()
//         console.log(`this Car ${this.name} is driving on the road`)
//     }
// }
//
// class Bicycle extends Vehicle {
//
//     move (){
//         super.move()
//         console.log(`The bicycle ${this.name} is being pedaled along the path`)
//     }
// }
//
// const bicycle1 = new Bicycle('A1')
// const car1 = new Car('Mazda')
// car1.move()
// bicycle1.move()




// задание Кости

class Vehicle {

    constructor(name, length, width, weight ) {
        this._name = name
        this._length = length
        this._width = width
        this._weight = weight
    }

    get name() {
        return `This is ${this._name}`
    }

    get length() {
        return `This is a ${this._name}'s length (${this._length})`
    }

    set length(value) {
        if(value <= 100) {
            this._length = value
            console.log(`This length of ${value} is a new ${this._name}'s length`)
        } else {console.log(`A ${this._name}'s length of ${value} cannot be so height`)}
    }

    get width() {
        return `This is a ${this._name}'s width (${this._width})`
    }

    set width(value) {
        if(value <= 100) {
            this._width = value
            console.log(`This width of ${value} is a new ${this._name}'s width`)

        } else {
            console.log(`A ${this._name}'s width of ${value} cannot be so height`)
        }
    }

    get weight() {
        return `This is a ${this._name}'s ${this._weight}`
    }

    message () {
        console.log(`This ${this._name} has a ${this._length} length, ${this._width} width, and ${this._weight}kg weight!!`)
    }
}

class Car extends Vehicle {

    message() {
        super.message();
    }
}

class Motorbike extends Vehicle {

}

const mazda = new Car (`mazda f1`, 100, 100, 100)
console.log(mazda.name)
console.log(mazda.length)
mazda.length = 99
console.log(mazda.length)
console.log(mazda.width)
mazda.width = 140
mazda.width = 80
console.log(mazda.width)
mazda.message()

// Полиморфизм

class Animal {

    constructor(name) {
        this.name = name
    }
    isMakingSound() {
        console.log(`${this.name} is making a sound..`)
    }
}
class Dog extends Animal {
    isMakingSound() {
        super.isMakingSound();
        console.log(`${this.name} is barking`)
    }
}

class Cat extends Animal {

    isMakingSound() {
        super.isMakingSound();
        console.log(`${this.name} is mewing`)
    }

}

const dog1 = new Dog('Nika')
const cat1 = new Cat('Yasha')
dog1.isMakingSound()
cat1.isMakingSound()


// Абстракция

class Device {

    constructor(name) {
        if (new.target === Device) {
            throw new Error('It is forbidden to create an instance of an abstract class!')
        }
        this.name = name
        this.isOn = false
    }

    turnOn() {
        throw new Error('You need to create a turnOn() method in the child class!')
    }

    turnOff() {
        throw new Error('You need to create a turnOff() method in the child class!')
    }

}

class Smartphone extends Device {
    turnOn() {
        this.isOn = true
        console.log(`The smartphone ${this.name} is turned on`)
    }
    turnOff() {
        // super.turnOff()
        this.isOn = false
        console.log(`The smartphone ${this.name} is turned off`)
    }

}

class Laptop extends Device {
    turnOn() {
        if (!this.isOn) {
            this.isOn = true
            console.log(`The laptop ${this.name} is powered on`)
        } else {
            console.log(`The laptop ${this.name} is already powered on`)}
    }
    turnOff() {
        if (this.isOn) {
            this.isOn = false
            console.log(`The laptop ${this.name} is powered off`)
        } else {
            console.log(`The laptop ${this.name} is already powered off`)
        }
    }
}

// const computer = new Device('Asus')

const iphoneXs = new Smartphone('Iphone Xs')

iphoneXs.turnOn()
iphoneXs.turnOn()

const asus = new Laptop('Asus Vivobook')

asus.turnOn()
asus.turnOn()


// Статичные методы

class Uni {

    static courses (name, initialGrade) {
       return `This is ${name} course and it needs the ${initialGrade} grade to enroll!!!`
    }

}

console.log(Uni.courses('JS', 3))


class MathUtil {
    static sum (a, b) {
        return a + b
    }

    static multiply (a, b) {
        return a * b
    }

    static isEven (num) {
        if ( num % 2 === 0 ) {
            console.log('true')
            return true

        } else {
            console.log('False')
            return false
        }
    }

}

console.log(MathUtil.sum(1, 8))
console.log(MathUtil.multiply(1, 8))
console.log(MathUtil.isEven(6))


//Прототипы

const vehicle  = {
    canMove: true,
    movingType: typeOfTheRoad => console.log(`The vehicle is moving on the ${typeOfTheRoad}`)
}

const car = {
    canStop: true
}

Object.setPrototypeOf(car, vehicle)

console.log(car.canMove)
car.movingType('Road')


// Принципы SOLID

//1. SOLID

class Report {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class SaveToFile {
    saveToFile(title) {
        console.log(`Saving report: ${title}.txt`);
    }
}

class SendEmail {
    sendEmail(title) {
        console.log(`Sending report ${title} by email`);
    }
}

class PrintReport {
    printReport(content) {
        console.log(`Printing: ${content}`);
    }
}

const report = new Report('IQOS', 'I love IQOS');

const save = new SaveToFile();
const sendEmail = new SendEmail();
const print = new PrintReport();

save.saveToFile(report.title);
sendEmail.sendEmail(report.title);
print.printReport(report.content)

