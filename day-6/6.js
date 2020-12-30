// https://adventofcode.com/2020/day/6
// https://adventofcode.com/2020/day/6#part2

const fs = require('fs');

const data = fs.readFileSync('./day6.txt', {encoding: 'utf-8'}).split('\r\n\r\n');

// const dataGroups = data.map(str => str.split('\r\n'));
// console.log(dataGroups);

const union = (set1, set2) => {
    const newSet = new Set();
    for (let item of set1) {
        newSet.add(item)
    }
    for (let item of set2) {
        newSet.add(item)
    }
    return newSet;
};

let total = 0;

for (let group of data) {
    const lines = group.split('\r\n');
    let finalSet = new Set();
    for (let line of lines) {
        const lineSet = new Set(line);
        finalSet = union(finalSet, lineSet);
    }
    total += finalSet.size;
}

// Answer:
console.log(total);

// Part 2:

const intersection = (set1, set2) => {
    const newSet = new Set();

    for (let item of set1) {
        if (set2.has(item)) {
            newSet.add(item);
        }
    }

    return newSet;
}

let intersectionTotal = 0;

for (let group of data) {
    const lines = group.split('\r\n');
    let intersectionSet = new Set(lines[0]);
    for (let line of lines) {
        const lineSet = new Set(line);
        intersectionSet = intersection(intersectionSet, lineSet);
    }
    intersectionTotal += intersectionSet.size;
}

console.log(intersectionTotal);