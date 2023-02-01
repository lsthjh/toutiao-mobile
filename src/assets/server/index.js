const http = require('http')
http.createServer(function (request, response) {
  // 发送 HTTP 头部
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  // 发送响应消息
  response.end('hi, Holy')
}).listen(80)

// 终端打印
console.log('Server running at http://127.0.0.1:1314')
