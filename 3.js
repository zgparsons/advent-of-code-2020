// https://adventofcode.com/2020/day/3

const fs = require('fs');

// Read lines from file and convert to array:
const lines = fs.readFileSync('day3.txt').toString().split('\r\n');

// Declare return variable, and x and y 'axes', plus get last in row index
let numTrees = 0;
let x = 0;
let y = 0;
let lastInRow = lines[0].length - 1;

// Begin at y=0 and loop all the way until y=final line and...
// ...move x along by 3 each time
while (y < lines.length - 1) {
    // Correct x if at the end of line
    if ((lastInRow - x) < 3) {
        x = x - lastInRow - 1;
    }
    x = x + 3;
    y = y + 1;
    // If current position is '#' add to count
    if (lines[y][x] === "#") {
        numTrees++;
    }
}

// Answer:
console.log(numTrees)