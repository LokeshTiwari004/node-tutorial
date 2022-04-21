const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome! to my home page');
  } else {
    res.end(`
    <h1>Opps!</h1>
    <p>Page Not Found</p>
    <p>Return <a href='/'>Home</a></p>
    `);
  }
})

server.listen(5000);