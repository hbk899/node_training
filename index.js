const http = require('http')
const path = require('path')

const fs = require('fs')



const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {

        res.end('<h1>helllo</h1></br><h2>billal</h2>')
    }

})
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port : ${PORT}`))