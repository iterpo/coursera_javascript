// var arr = [10, 20, 22, 30, 40];

// newarr = arr.map(function (num) {
//     return num % 2
// })

// console.log(newarr)

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result)