// https://adventofcode.com/2020/day/4

const fs = require('fs');

// * Tried a couple of different things (commented out at bottom of file) but kept getting an answer too high - 198...
// ...eventually gave in and looked at Reddit for guidance. The code used here is...
// ...pretty much the same as code found here:
// https://www.reddit.com/r/adventofcode/comments/k6e8sw/2020_day_04_solutions/gewgwo0/?context=3
// by u/foureyedraven - https://www.reddit.com/user/foureyedraven/

// Read lines from file and convert to array:
const rows = fs.readFileSync('day4.txt').toString().split(/^\n$/gm);
const passes = rows
        .map(row => row.replace(/\n/g, ' '))
        .map(row => row.split(' '))
        .filter(id => id.length > 6);

const passports = [];

passes.forEach(pass => {
    obj = {};
    pass.map(line => {
        stat = line.split(':');
        obj[stat[0]] = stat[1];
    })
    passports.push(obj);
})

let validPassports = passports.filter(pass => pass.byr && pass.iyr && pass.eyr && pass.ecl && pass.pid && pass.hgt && pass.hcl).length;

console.log(validPassports);

// Make conditions array & function to check array for conditions
// const conditions = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'pid'];

// let includesAll = (arrayToCheck) => conditions.reduce(
//     (accumulator, current) => accumulator && arrayToCheck.includes(current),
//     true
// )

// let validPassports = 0;

// console.log(includesAll(passes[0]));

// // Check each pass and add to valid number if valid:
// for (let pass in passes) {
//     if (includesAll(passes[pass])) {
//         validPassports++;
//     }
// }

// // Answer:
// console.log(validPassports);