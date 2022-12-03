// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);


// let obj = {
//     key: 1,
//     value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);


// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);


var data = {
    "name": "john",
    "surname": "terpo",
    "age": "22",
    "char": "$"
}


jsonFormat_data = JSON.stringify(data);

console.log(jsonFormat_data)
console.log(typeof (jsonFormat_data))
this1 = JSON.parse(jsonFormat_data)
console.log(this1.surname)


class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());




function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();
