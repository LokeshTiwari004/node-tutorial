const { readFile, writeFile } = require('fs');

const read = (path, data) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, result) => {
      if (err) {
        reject(err)
      } else {
        data.unshift(result)
        resolve(data)
      }
    })
  })
}

const write = (path, data) => {
  return new Promise((resolve, reject) => {
    writeFile(
        path,
        `Another result: ${data.join(' ')} \n`,
        // {flag: 'a'},
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        }
      )
  })
}

console.log(1);
read('./content/first.txt', [])
  .then((value) => {
    return read('./content/second.txt', value)
  })
  .then((value) => {
    return write('./content/result-async-promisised.txt', value)
  })
console.log(2);




// --------------- Equivalent Async Await Approach ------------------

// const doit = async () => {
//   const first = read('./content/first.txt', [])
//   const second = read('./content/second.txt', [])
  
//   console.log(await first, await second);
  
//   write('./content/result-async-promisised.txt', [...await first, ...await second])
// }
// console.log(1);
// doit();
// console.log(2);