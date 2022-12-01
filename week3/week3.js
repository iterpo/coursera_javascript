// Introduction to functional programming


function myName({ one, two, three }) {
    console.log("myName started");
    return one + two + three;
}


x = myName({
    one: "one",
    two: "two",
    three: "three"
})

console.log(x)


function print(x) {
    console.log(x);
}


print("this is the best printer")

print(1 === "1")


var virtualPet = {
    sleepy: true,
    nap: function () {
        console.log('zzzzzzzzzz');
        this.sleepy = false;

    }
}

console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false


function celebrateStyler(reason) {
    fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }


}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebratecolor(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebratecolor('ef7c8e',
    'fae8e0',
    '30px',
    'You made it!',
    'champions')



let appple = new String(4);
let apppple = new String(4);

appple.concat(apppple);

print(appple)
print(apppple == appple)


// OOP
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10);
    intern.goToWork();
    console.log(intern);
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker(name = "Alice", age = 30, energy = 120, xp = 100, hourlyWage = 30);
    manager.doSomethingFun();
    console.log(manager);
    return manager;
}



class Animal {

}

class Cat extends Animal {
    constructor() {
        super();
        this.noise = "meow";
    }
}

var result = new Animal();
console.log(result.noise);



class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);


// Exercise array and object iteration
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var item of dairy) {
        console.log(item);
    }
}

logDairy();

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var pro of Object.keys(bird)) {
        console.log(`${pro}: ${bird[pro]}`)
    }
}

birdCan();


// Task 3

function animalCan() {
    for (var lele in bird) {
        console.log(`${lele}: ${bird[lele]}`)
    }
}


animalCan()

