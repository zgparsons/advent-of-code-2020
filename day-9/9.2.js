// https://adventofcode.com/2020/day/9#part2

// https://www.youtube.com/watch?v=5-TGmYNhGZs

const fs = require('fs');

const data = fs.readFileSync('./day9.txt', {encoding: 'utf-8'}).split('\r\n');
// console.log(data)

const solve = () => {
    const numbers = data.map(Number);
    // console.log(numbers);
    const invalidNum = firstInvalid(numbers);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const subArray = numbers.slice(i, j+1);
            if (sumArray(subArray) === invalidNum) {
                return Math.min(...subArray) + Math.max(...subArray);
            }
        }
    }
}

const sumArray = (array) => {
    let sum = 0;
    for (let el of array) {
        sum += el;
    }
    return sum;
}

// console.log(sumArray([1, 2, 3]))

const firstInvalid = (numbers) => {
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

console.log(solve());