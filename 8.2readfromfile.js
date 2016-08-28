var fs = require('fs');
fs.readFile('./somefile.txt','utf8',function(err,data){  //可指定位置
	if(!err){
		console.log(data);
	}else{
		console.log(err);
	}
});