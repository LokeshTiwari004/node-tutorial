const { readFile, writeFile } = require('fs').promises;
let t;

const start = async () => {
  const first =  readFile('./content/first.txt', 'utf8')
  const second =  readFile('./content/second.txt', 'utf8')

  await writeFile(
    './content/result-async-await.txt',
    `Result by simplest pattern: ${await first} ${ await second} \n`,
    // {flag: 'a'}
  )
  console.log(await first, await second);
}

console.log(1);
start();
console.log(2);