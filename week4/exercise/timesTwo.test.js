var x = 0 != 1;
console.log(x)
const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});

// run with
// => npm run test



