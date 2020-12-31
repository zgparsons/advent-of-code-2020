// https://adventofcode.com/2020/day/7
// todo - https://adventofcode.com/2020/day/7#part2

// With graph theory help 🙏 from:
// https://www.youtube.com/watch?v=8qjS-h6ybdo

const fs = require('fs');

const data = fs.readFileSync('./day7.txt', {encoding: 'utf-8'}).split('\r\n\r\n');
const dataGroups = data.map(str => str.split('\r\n'));
const rules = dataGroups[0];

const parseLines = (line) => {
    const [ destination, rest ] = line.split('s contain ');

    const segments = rest.split(', ');
    const sources = [];
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const amount = Number(segment[0]);
        let source = amount === 1 ? segment.slice(2) : segment.slice(2, -1);

        if (i === segments.length - 1) {
            source = source.slice(0, -1);
        }
        sources.push(source);
    }
    return {
        destination,
        sources
    };
}

const solve = () => {
    const graph = {};
    for (let rule of rules) {
        const { destination, sources } = parseLines(rule);
        if (!(destination in graph)) {
            graph[destination] = [];
        }
        for (let source of sources) {
            if (!(source in graph)) {
                graph[source] = [];
            }
            graph[source].push(destination);
        }
    }
    console.log(traverse(graph, 'shiny gold bag') - 1);
};

const traverse = (graph, node, visited = new Set()) => {
    if (visited.has(node))
        return 0;

    visited.add(node);
    
    let numBagColours = 1;
    for (let neighbour of graph[node]) {
        numBagColours += traverse(graph, neighbour, visited);
    }
    return numBagColours;
}

solve();