var http = require('http');

var options={
	host : 'www.baidu.com',
	port : 80,
	path : '/'
};

http.get(options,function(res){
	if(res.statusCode == 200){
		console.log('The site is up!\n');
	}else{
		console.log('The site is down!\n');
	}
}).on('error',function(e){
	console.log('There is an error'+e.message);
});