import http from 'http'

const PORT = 8080

const server = http.createServer((req, res) => {
    res.end('vcsdfsdfsd')
})

server.listen(PORT, 'localhost', () => {
    console.log (`Server on port ${PORT}`);
})