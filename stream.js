const { createReadStream } = require('fs');

const stream = createReadStream('../content/big-file.txt', {
    // highWaterMark: 136000,
    // encoding: 'utf8'
});

stream.on('data', (data) => {
    console.log(data)
})

// stream.on('error', (error) => {
//     console.error(error)
// })