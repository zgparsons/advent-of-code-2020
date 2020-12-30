// https://adventofcode.com/2020/day/2

const fs = require('fs');

// Read lines from file and convert to array:
const passwords = fs.readFileSync('day2.txt').toString().split('\r\n');

// console.log(passwords)

let valid = 0;

// How to get different parts of the string:
// let first = passwords[1].split(': ');
// let targetLetter = first[0].slice(first[0].length-1);
// let targetAmount = first[0].slice(first[0], first[0].length-2);
// let password = first[1];

// console.log(first, targetLetter, targetAmount, password);

passwords.forEach(password => {
    // Split string to get necessary parts:
    let each = password.split(': ');
    let letter = each[0].slice(each[0].length-1);
    let amount = each[0].slice(each[0], each[0].length-2);
    let pass = each[1];
    let amountsArray = amount.split('-');

    // Use reg exp to check each password for the target letter
    let regExp = new RegExp(`${letter}`, 'g');
    let numOfLetters = 0;
    let arrayOfLetters = pass.match(regExp);
    if (arrayOfLetters) {
        numOfLetters += arrayOfLetters.length;
    };
    
    // Check if each password is valid or not
    if (numOfLetters >= amountsArray[0] && numOfLetters <= amountsArray[1]) {
        valid++;
    };
});

// Answer:
console.log(valid);