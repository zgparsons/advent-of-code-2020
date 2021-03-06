// https://adventofcode.com/2020/day/3#part2

const fs = require('fs');

// Read lines from file and convert to array:
const lines = fs.readFileSync('day3.txt').toString().split('\r\n');

// function calls:
let one = traverse(lines, 1, 1);
let two = traverse(lines, 3, 1);
let three = traverse(lines, 5, 1);
let four = traverse(lines, 7, 1);
let five = traverse(lines, 1, 2);

// Answer:
console.log(one, two, three, four, five, one*two*three*four*five);

// function to get tree collisions:
function traverse(lines, right, down) {
    let numTrees = 0;
    let x = 0;
    let y = 0;
    let lastInRow = lines[0].length - 1;

    while (y < lines.length - 1) {
        if ((lastInRow - x) < right) {
            x = x - lastInRow - 1;
        }
        x = x + right;
        y = y + down;

        if (lines[y][x] === "#") {
            numTrees++
        }
    }
    return numTrees;
}