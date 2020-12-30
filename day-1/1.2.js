// https://adventofcode.com/2020/day/1#part2

const fs = require('fs');

// Read nums from file and convert to int array:
const expenses = fs.readFileSync('day1.txt').toString().split('\n');
for (let i = 0; i < expenses.length; i++) { expenses[i] = +expenses[i] };

// function call:
let threeNums = arrayThreeNums(expenses, 2020);

// Answer:
console.log(threeNums[0]*threeNums[1]*threeNums[2]);

function arrayThreeNums(array, num) {
    // Returns array of size 3 - containing 3 numbers from 'array' that add up to 'num'

    // Sort array
    array.sort((a, b) => a - b);

    // Left and right pointer:
    let l = 0;
    let mid = 1
    let r = array.length - 1;

    // Check array[l] and array[r] and move one or the other:
    while (l < r) {
        if (array[l] + array[mid] + array[r] == num) {
            return [array[l], array[mid], array[r]];
        } else if (array[l] + array[mid] + array[r] < num) {
            l += 1;
            mid += 1;
        } else {
            r -= 1;
        }
    }
}