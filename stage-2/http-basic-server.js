const http = require('http');
const { Http2ServerResponse } = require('http2');

http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Hello Server</h1>')
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Server</h1>')
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.write('Resource not found!!')
        res.end()
    }
}).listen(2000, () => {
    console.log("Server listening on PORT 2000...");
})