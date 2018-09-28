// http.js
// 自己写一个 HTTP 服务器在 node.js 平台上运行

let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('hr.html'));
}).listen(3000);