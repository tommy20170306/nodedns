const fs = require('fs');
const c = console.log;

const foname = "resources";
const finame = "a.log";
const ffname = `${foname}/${finame}`;

fs.exists(foname, (exists) => {
	if(exists){
		c("1. Exist? "+exists);
	}else{
		fs.mkdir(foname, '0o755', (err, mess) => {});
	}

	fileoperation();
	fileread();	
});

function fileoperation(){
	fs.open(ffname, 'wx', '0755', (err, fd) => {
		fs.appendFile(ffname, new Date() + " : access\n", (err) => {
			if(err) throw err;
			c("File operation done.");
			filetime();
		});
	});
}

function fileread(){
	let readStream = fs.createReadStream(ffname, {
		flags: 'r',
		encoding: 'utf8',
		start: 0,
		end: 20,
		autoClose: true
	});

	readStream.on('readable', () => {
		let byteSize = 3;
		let chunk;
		while( (chunk = readStream.read(byteSize))){
			c(`Read: ${chunk}`);
		}	
	});
}

function filetime(){
	//modify time
	fs.utimes(ffname, Date.now()/1000 - 50*500000, Date.now()/1000 - 50*500000, (err) => {
		
		//read modified time
		fs.watchFile(ffname, (curr, prev) => {
		  console.log(`the current mtime is: ${curr.mtime}`);
		  console.log(`the previous mtime was: ${prev.mtime}`);
		});

	});
}