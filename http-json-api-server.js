const http = require('http');
const url = require('url');

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

const server = http.createServer(function (req, res) {  
  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(parsedUrl.pathname === '/api/parsetime' ? parsetime(time) : unixtime(time)));
  } else {
    res.writeHead(404);
    res.end();
  }
} );  

server.listen(Number(process.argv[2]));
