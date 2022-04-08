const { readFile, writeFile } = require('fs')

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
        `Another result: ${data.join(' ')}`,
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