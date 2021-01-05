// https://adventofcode.com/2020/day/9

// https://www.youtube.com/watch?v=5-TGmYNhGZs

const fs = require('fs');

const data = fs.readFileSync('./day9.txt', {encoding: 'utf-8'}).split('\r\n');
// console.log(data)

const solve = () => {
    const numbers = data.map(Number);
    // console.log(numbers);
    for (let i = 25; i < numbers.length; i++) {
        const previous = numbers.slice(i-25, i);
        if (pairSum(previous, numbers[i]) === false) {
            return numbers[i]
        }
    }
}

const pairSum = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
};

// console.log(pairSum([1, 2, 4, 5], 3)) // true
// console.log(pairSum([1, 2, 4, 5], 17)) // false

console.log(solve());