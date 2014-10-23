differ-cli
==========

differ in cli


### Usage

* CLI

		$ npm install differ-cli -g

		$ differ-cli <file1> <file2>

* node

		var differ = require('differ-cli')

		differ('path/of/file1', 'path/of/file2', function(err, result){
			!err && console.log(result);
		});

### Result

![diff result](http://document.qiniudn.com/differ.jpg)