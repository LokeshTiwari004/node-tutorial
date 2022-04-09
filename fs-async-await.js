// const { read, readFile } = require('fs');

const { readFile, writeFile } = require('fs').promises;




const start = async () => {
  try {
    const first = readFile('./content/first.txt', 'utf8')
    const second = readFile('./content/second.txt', 'utf8')

    await writeFile(
      './content/result-async-await.txt',
      `Result Async Await: ${await first}, ${await second}`,
      { flag: 'a' }
    )
    console.log(await first, await second)

  } catch (error) {
    console.log(error);
  }
}

console.log(1);
start();
console.log(2);
