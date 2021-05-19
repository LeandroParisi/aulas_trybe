const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  console.log('running')
  res.end('Hello World!');
});

server.listen(8085)
