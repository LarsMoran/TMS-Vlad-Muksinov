const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((request, response) => {
    const filePath = path.join(__dirname, request.url === '/' ? 'index.html' : request.url)
    console.log(filePath)
    const extname = path.extname(filePath)
    let contentType = 'text/html'
    switch (extname) {
        case '.css': 
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default: 
            contentType = 'text/html'
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err
        }
        response.writeHead(200, {
            'Content-Type': contentType //^-^
        })
        response.end(data)
    })
})

server.listen(8000, '127.0.0.1', () => {
     console.log('SERvER STARTING..')
})

