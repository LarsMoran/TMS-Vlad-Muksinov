const http = require('http')
const fs = require('fs')



/*read.on('data', (chunk)=>{
    console.log('new chunk received') standard read-write
    write.write(chunk)
})*/



const serv = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    const read = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
    read.pipe(res)//pipe method
})

serv.listen(3000, '127.0.0.1', () => {
    console.log('serv is listening on port 3000')
})

