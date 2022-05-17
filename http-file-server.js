
const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

http.createServer (function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(file).pipe(response)
} ).listen(port)  
  console.log('Server listening on http://localhost:%s', port)

