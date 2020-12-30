// https://adventofcode.com/2020/day/4#part2
// With help from https://www.youtube.com/watch?v=J8NoiKq-gO0
// Got to watch out for line endings (I'm on a windows machine...)

const fs = require('fs').promises;

const read = async () => {
    const data = await fs.readFile('./day4', {encoding: 'utf-8'});
    return data.split(/^\n$/gm);
};

const parseEntry = (str) => {
    const parts = str.split(/\r\n|\s/g);
    const obj = {};
    for (let part of parts) {
        const [ key, val ] = part.split(':');
        obj[key] = val;
    }
    return obj;
};

const solve = async () => {
    const entries = await read();
    const rows = entries.map(parseEntry);
    console.log(rows)
    const validators = [
        validByr,
        validEcl,
        validEyr,
        validHcl,
        validHgt,
        validIyr,
        validPid
    ]
    let numValid = 0;
    
    for (let row of rows) {
        const isValid = validators.every(validator => validator(row));
        if (isValid) {
            numValid += 1;
        }
    }
    return numValid;
}

// Validators:

const validRange = (data, key, min, max) => {
    if (data[key] === undefined) 
        return false;
    const val = Number(data[key]);
    return min <= val && val <= max;
};

const validByr = (data) => {
    return validRange(data, 'byr', 1920, 2002);
}

const validIyr = (data) => {
    return validRange(data, 'iyr', 2010, 2020);
}

const validEyr = (data) => {
    return validRange(data, 'eyr', 2020, 2030);
}

const validHgt = (data) => {
    if (data.hgt === undefined)
        return false;

    const unit = data.hgt.slice(-2);

    const val = Number(data.hgt.slice(0, -2));

    if (unit === 'in') {
        return 59 <= val && val <= 76;
    } else if (unit === 'cm') {
        return 150 <= val && val <= 193;
    } else {
        return false;
    }
}

const validHcl = (data) => {
    if (data.hcl === undefined)
        return false;
    
    return data.hcl.match(/^#([0-9a-f]{6})$/) !== null;
}

const validEcl = (data) => {
    if (data.ecl === undefined)
        return false;
    
    const colours = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
    return colours.has(data.ecl);
}

const validPid = (data) => {
    if (data.pid === undefined) {
        return false
    }
    return data.pid.match(/^([0-9]{9})$/) !== null;
}

solve().then(console.log);