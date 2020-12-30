const fs = require('fs');

// Code from part 1 of Day 4.

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


// Functions
const validRange = (data, key, min, max) => {
    if (data[key] === undefined) 
        return false;
    const val = Number(data[key]);
    return min <= val && val <= max;
};

const validByr = (data) => {
    return validRange(data, 'byr', 1920, 2002);
}

console.log(validByr(passports[0]));

const validIyr = (data) => {
    return validRange(data, 'Iyr', 2010, 2020);
}

console.log(validIyr(passports[0]));

const validEyr = (data) => {
    return validRange(data, 'eyr', 2020, 2030);
}

console.log(validEyr(passports[0]));

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

console.log(validHgt(passports[0]));

const validHcl = (data) => {
    if (data.hcl === undefined)
        return false;
    
        return data.hcl.match(/^#([0-9a-f]{6})$/) !== null;
}

console.log(validHcl(passports[0]));

const validEcl = (data) => {
    if (data.ecl === undefined)
        return false;
    
        const colours = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
    return colours.has(data.ecl);
}

console.log(validEcl(passports[0]));

const validPid = (data) => {
    console.log(data)
    if (data.pid === undefined) {
        return false
    }
    return data.pid.match(/^([0-9]{9})\r$/) !== null;
}

console.log(validPid(passports[0]));


// Solve:
const validators = [
    validByr,
    validEcl,
    validEyr,
    validHcl,
    validHgt,
    validIyr,
    validPid
];

let numValid = 0;

for (let passport of passports) {
    
    const isValid = validators.every(validator => validator(passport));
    // console.log(isValid)
    if (isValid) {
        numValid++;
    }
}

// Answer:
console.log(numValid);

// let hgtFilteredPassports = passports.filter(passport => {
//     let testing = passport.hgt;

//     if (testing.match(/cm|in/)) {
//         console.log(testing);
//     } 
// })

// let validPassports = hgtFilteredPassports.filter(pass =>
//         pass.byr >= 1920 &&
//         pass.byr <= 2020 &&
//         pass.iyr >= 2010 &&
//         pass.iyr <= 2020 &&
//         pass.eyr >= 2020 &&
//         pass.eyr <= 2030 &&
//         // pass.hgt && pass.hgt.match(/^(1[5-8]\dcm|19[0-3]cm)|(59|6\d|7[0-6]in)$/gm) &&
//         pass.hcl && pass.hcl.match(/#[a-z0-9]{6}/) &&
//         pass.ecl && pass.ecl.match(/amb|blu|brn|gry|grn|hzl|oth/) &&
//         pass.pid && pass.pid.match(/\d{9}/)).length;

// // for (let i = 0; i < passports.length; i++) {
// //     console.log(passports[i].hgt);
// // // }
// console.log(validPassports);