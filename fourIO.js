var http = require('http'),
	fs = require('fs');

http.get({host: 'shapeshed.com'},function(res){
	console.log("Got response from shapeshed.com");
}).on('error',function(e){
	console.log("There was an error from shapeshed.com");
});

fs.readFile('somefile.txt','utf8',function(error,data){
	if (error) throw error;
	console.log("Read somefile.txt succeed!");
});

http.get({host:'www.bbc.co.uk'},function(res){
	console.log('Got a response from www.bbc.co.uk');
}).on('error',function(e){
	console.log("There was an error from www.bbc.co.uk");
});

fs.readFile('somefile.txt','utf8',function(error,data){
	if (error) throw error;
	console.log("Read somefile.txt again succeed!");
});

//四个输入输出的回调顺序不确定