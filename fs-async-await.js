const { read, readFile } = require('fs');

const { reaFile, writeFile } = require('fs').promises;




const start = async () => {
  const first = await readFile('./content/first.txt', 'utf8')
  const second = await readFile('./content/second.txt', 'utf8')

  console.log(first, second);
}

console.log(1);
start();
console.log(2);
