var http = require('http');
http.createServer (function(req,res){
	res.writeHead(301,{
		'Location' : 'https://www.baidu.com/'       //重定向到百度
	});
	res.end();
}).listen(3000,'127.0.0.1');
console.log("Server running at http://127.0.0.1:3000/");