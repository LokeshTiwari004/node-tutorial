const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  } else if (req.url === '/about') {
    for (let i = 0; i < 1000000; i++) {
      console.log(1);
    }
    res.end('About Page')
  } else {
    res.end(`
    <h1>Page Not Found</h1>
    <a href='/'>Return Home</a>
    `)
  }
})

server.listen(5000, () => {
  console.log('Server Launched Successfully')
})