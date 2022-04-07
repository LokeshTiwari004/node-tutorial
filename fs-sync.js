const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

console.log(1);
const first = readFileSync(join('./content', 'first.txt'), 'utf8');
const second = readFileSync(join('./content', 'second.txt'), 'utf8');

console.log(first, second);


console.log(2);
writeFileSync(
    join('./content', 'result-sync.txt'),
    `here is the result: ${first}, ${second} \n`,
    // { flag: 'a' }
);
console.log(3);