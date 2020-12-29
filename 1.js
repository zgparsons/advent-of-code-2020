// https://adventofcode.com/2020/day/1

const fs = require('fs');

// Read nums from file and convert to int array:
const expenses = fs.readFileSync('day1.txt').toString().split('\n');
for (let i = 0; i < expenses.length; i++) { expenses[i] = +expenses[i] };

// function call:
let twoNums = arrayTwoNums(expenses, 2020);

// Answer:
console.log(twoNums[0] * twoNums[1]);

function arrayTwoNums(array, num) {
    // Returns array of size 2 - containing 2 numbers from 'array' that add up to 'num'

    // Sort array
    array.sort((a, b) => a - b);

    // Left and right pointer:
    let l = 0;
    let r = array.length - 1;

    // Check array[l] and array[r] and move one or the other:
    while (l < r) {
        if (array[l] + array[r] == num) {
            return [array[l], array[r]];
        } else if (array[l] + array[r] < num) {
            l += 1;
        } else {
            r -= 1;
        }
    }
}