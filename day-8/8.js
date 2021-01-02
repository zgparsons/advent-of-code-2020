// https://adventofcode.com/2020/day/8

// https://www.youtube.com/watch?v=oWqA2ID5zFA&t=381s

const fs = require('fs');

const data = fs.readFileSync('./day8.txt', {encoding: 'utf-8'}).split('\r\n');
// console.log(data)

const getParts = (data) => {
    const [ type, val ] = data.split(' ');
    return {
        type,
        val: Number(val)
    };
};

const instructions = data.map(getParts);

const getAccum = (instructions, i = 0, visited = new Set()) => {
    
    if (visited.has(i)) {
        return 0;
    }
    visited.add(i);

    const { type, val } = instructions[i];
    if (type === 'jmp') {
        return getAccum(instructions, i + val, visited);
    } else if (type === 'acc') {
        return val + getAccum(instructions, i + 1, visited);
    } else {
        return getAccum(instructions, i + 1, visited);
    }
}

console.log(getAccum(instructions));

// const solve = () => {
//     const process = getParts(data);
//     // console.log(process);
//     let accumulator = 0;
//     for (let i = 0; i < process.length; i++) {
//         // console.log(process[i]);
//         if (process[i].indexOf('visted') > -1) {
//             console.log('here', accumulator)
//             break;
//         }
//         if (process[i][0] === 'acc') {
//             accumulator = process[i][1] === '-' ? accumulator - process[i][2] : accumulator + process[i][2];
//             process[i].push('visited');
//         } else if (process[i][0] === 'jmp') {
//             i = process[i][1] === '-' ? i - process[i][2] : i + process[i][2];
//             process[i].push('visited')
//         }
//     }
//     return accumulator;
// }

// console.log(solve());