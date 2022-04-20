const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    // const data = fs.readFileSync('./content/big-file.txt', 'utf8');
    // res.end(data)

    const fileStream = fs.createReadStream('./content/big-file.txt', "utf8");
    fileStream.on('open', (data)=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)