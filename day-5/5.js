// https://adventofcode.com/2020/day/5
// https://adventofcode.com/2020/day/5#part2

const fs = require('fs');

const data = fs.readFileSync('./day5.txt', {encoding: 'utf-8'}).split('\r\n');

const binaryFind = (str, loSym, hiSym, lo, hi) => {
    for (let char of str) {
        const mid = Math.floor((lo + hi) / 2);
        if (char === loSym) {
            hi = mid;
        } else if (char === hiSym) {
            lo = mid;
        }
    }
    return lo;
}
// console.log(binaryFind('FBFBBFF', 'F', 'B', 0, 128));
// console.log(binaryFind('RLR', 'L', 'R', 0, 8));

const seatIds = data.map(seat => {
    const row = seat.slice(0, 7);
    const col = seat.slice(7);
    const rowNum = binaryFind(row, 'F', 'B', 0, 128);
    const colNum = binaryFind(col, 'L', 'R', 0, 8);
    return (8 * rowNum) + colNum;
})

// Answer to part 1:
console.log(Math.max(...seatIds));

// Part 2:
const sortedIds = seatIds.sort((a, b) => a - b);

let mySeat = 0;
for (let i = 1; i < sortedIds.length - 1; i++) {
    const current = sortedIds[i];
    const next = sortedIds[i+1];
    if (current + 1 !== next) {
        mySeat = current + 1;
    }
}
// Answer:
console.log(mySeat);