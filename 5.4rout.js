var http = require('http');
	url = require('url');

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;        //获取请求的路径名       host路径名

	if(pathname === '/'){
		res.writeHead(200,{                         //200正常响应
			'Content-Type' : 'text/plain'
		});
		res.end('Home page\n');
	}else if(pathname === '/about'){
		res.writeHead(200,{
			'Content-Type' : 'text/plain'
		});
		res.end('About page\n');
	}else if(pathname === '/redirect'){
		res.writeHead(301,{                         //301重定向
			'Location' : '/'
		});
		res.end();
	}else{
		res.writeHead(404,{
			'Content-Type' : 'text/plain'
		});
		res.end('Page not found\n');
	}
}).listen(3000,"localhost");
console.log('Server running at http://localhost:3000/');