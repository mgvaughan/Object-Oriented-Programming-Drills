//Step 1 (Object Literals, Pseudo Classes and methods)
// let person1 = {
//     name: "David",
//     sayHello: function() {
//         console.log(`Hello! My name is ${person1.name}`)
//     }
// }
// person1.sayHello();

// let person2 = {
//     name: "Richard",
//     sayHello: function () {
//         console.log(`Hello! My name is ${person2.name}`)
//     }
// }
// person2.sayHello()

// let person3 = {
//     name: "Leonie",
//     sayHello: function () {
//         console.log(`Hello! My name is ${person3.name}`)
//     }
// }
// person3.sayHello()

// let person4 = {
//     name: "Louise",
//     sayHello: function () {
//         console.log(`Hello! My name is ${person4.name}`)
//     }
// }
// person4.sayHello()

// let person5 = {
//     name: "Michael",
//     sayHello: function () {
//         console.log(`Hello! My name is ${person5.name}`)
//     }
// }
// person5.sayHello()

//Steps 2-4 (Object Literals, Pseudo Classes and methods)
// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.myStatement = function() {
//     return(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
// }

// let p1 = new Person('David', "Atlanta", 36)
// let p2 = new Person('Richard', "Johannesburg", 48)
// let p3 = new Person('Leonie', "Leeds", 46)
// let p4 = new Person('Louise', "London", 50)
// let p5 = new Person('Michael', "Atlanta", 33)

// console.log(p1.myStatement())
// console.log(p2.myStatement())
// console.log(p3.myStatement())
// console.log(p4.myStatement())
// console.log(p5.myStatement())

//Steps 5 (Object Literals, Pseudo Classes and methods)
// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }
//     myStatement() {
//         return(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
//     }
// }

// let p1 = new Person('David', "Atlanta", 36)
// let p2 = new Person('Richard', "Johannesburg", 48)
// let p3 = new Person('Leonie', "Leeds", 46)
// let p4 = new Person('Louise', "London", 50)
// let p5 = new Person('Michael', "Atlanta", 33)

// console.log(p1.myStatement())
// console.log(p2.myStatement())
// console.log(p3.myStatement())
// console.log(p4.myStatement())
// console.log(p5.myStatement())

// Step 1 (Inheritance)
class Vehicle {
    constructor(type, manufacturer, tireNum) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.tireNum = tireNum;
    }
    aboutVehicle() {
        console.log(`the vehicle is a ${this.type}, and was made by ${this.manufacturer} and has ${this.tireNum} tires`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, tireNum, doorNum, bed) {

        super(type, manufacturer, tireNum);
        this.doorNum = doorNum;
        this.bed = bed; 
    }
    aboutVehicle () {
        console.log(`the vehicle is a ${this.type}, and was made by ${this.manufacturer} and has ${this.tireNum} tires. It is ${this.bed} that a bed is attached`);
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, tireNumm, doorNum, bed, size, mpg) {
        super(type, manufacturer, tireNum)
        this.doorNum = doorNum;
        this.bed = bed; 
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle () {
        console.log(`the vehicle is a ${this.type}, and was made by ${this.manufacturer} and has ${this.tireNum} tires. It is ${this.bed} that a bed is attached. The car size is ${this.size}, and gets ${this.mpg} miles per gallon`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, tireNum, doorNum, handlebar, bed) {
        super(type, manufacturer, tireNum)
        this.doorNum = doorNum;
        this.handlebar = handlebar;
        this.bed = bed
    }
    aboutVehicle () {
        console.log(`the vehicle is a ${this.type}, and was made by ${this.manufacturer} and has ${this.tireNum} tires. It is ${this.bed} that a bed is attached, as well as it is ${this.doorNum} that it has doors, but it is ${this.handlebar} that it has handlebars`);
    }
}

let m1 = new Motorcycle("motorcycle", "Harley", "two", "False", "True", "False");

m1.aboutVehicle();