var h = require("http");
h.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
    res.end("开始我的第一Node程序\n");
}).listen(3000, '127.0.0.1');
console.log("开始我的第一Node程序！");
