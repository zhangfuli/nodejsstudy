var fs = require('fs');
data = "Some data I want to read to file";
fs.writeFile('./somefile.txt',data,function(err){     //writeFile  也可以创建一个文件  可指定位置
	if(!err){
		console.log('succeed');
	}else{
		throw err;
	}
});