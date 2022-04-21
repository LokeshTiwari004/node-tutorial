const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle = fs.readFileSync('./navbar-app/styles.css');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');


const server = http.createServer((req, res) => {
    const url = req.url;

    if ( url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1> about world </h1>')
        res.end()
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeLogic)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1> Resource Not Found </h1>')
        res.end()
    }
})

server.listen(5000);