// code 1 

var a = 10;
var b = 20;
var c = a + b;

console.log(c);

// convert to function <>

function addTwoNumbers() {
    var a = 10;
    var b = 20;
    var c = a + b;

    console.log(c);
}

// call or invoke the function addTwoNumbers
addTwoNumbers();

// code 2 - function with parameters

function addTwoNumbersParameters(a, b) {
    var c = a + b;
    console.log(c);
}

addTwoNumbersParameters(10, 20)
//or 
addTwoNumbersParameters(b = 20, a = 10)
//------------------------------------------------

// Exercise 1 code 
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

// OUTPUT:
// Found the t at 0
// ---No match found at 1
// ---No match found at 2
// Found the t at 3

//OBJECTS 
//init
// var storeManager = {}

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

console.log(assistantManager.health)
// change health of Manager 
assistantManager.health = 99;
console.log(assistantManager.health)


// array = strings

var greetings = "howdy";

for (i = 0; i < greetings.length; i++) {
    console.log(greetings[i]);
}

// Exercise 2:
var clothes = [];
var items = ["tee", "too", "taa", "tii", "tuu"];
for (var item = 0; item < items.length; item++) {
    clothes.push(items[item]);
}
console.log(clothes)

var favCar = {};
favCar.color = "black";
favCar.covertible = true;

console.log(favCar)


// output ex2
// [ 'tee', 'too', 'taa', 'tii', 'tuu' ]
// { color: 'black', covertible: 1 }


//Error handling

// throw new ReferenceError();
// try {
//     throw new ReferenceError();
// } catch (err) {
//     console.log(err)
//     console.log("error happened")
// }
// console.log("continued")


// Exercise 3 - error handling 

// function add2(a, b) {
//     try {
//         if (typeof (a) != 'number') {
//             throw new ReferenceError('the first argument is not a number')
//         } else if (typeof (b) != 'number') {
//             throw new ReferenceError('the second argument is not a number')
//         } else {
//             console.log(a + b)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }


// add2(5, "5");


// Exercise: Defensive programming
function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([], [])
letterFinder("cat", "c")


var result = null;
console.log(result);


try {
    console.log('Hello');
} catch (err) {
    console.log('Goodbye');
}

var str = "Hello";
str.match("jello");

try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}










