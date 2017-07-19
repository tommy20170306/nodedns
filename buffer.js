const Buffer = require('buffer').Buffer;
const c = console.log;

const buff = new Buffer(2);
c(buff);
c(`Size of buff = ${buff.length}`);

const buff2 = new Buffer("Node NPM");
c(Buffer.isEncoding("utf-8"));
c(buff2.toString());

/*const buf = Buffer.from('hello world ? 一', 'utf8');
c(buf);
c(buf.toString('binary'));
c(buf.toString('hex'));
c(buf.toString('base64'));
c(buf.toString('utf8'));
c(buf.toString('ascii'));

c("----------------------------------");

const arr = new Uint16Array(2);

arr[0] = 100;
arr[1] = 200;

c(`arr[0]: ${arr[0]}`);

// Copies the contents of `arr`
const buf1 = Buffer.from(arr);
c(`buf1[0]: ${buf1[0]}`);
buf1[2] = 5;
c(`buf1[2]: ${buf1[2]}`); // => undefined

// share memory with `arr`
const buf2 = Buffer.from(arr.buffer);
c(`buf2[0]:${buf2[0]}`);
buf2[2] = 5;
buf2[3] = 6;
c(`buf2[2]${buf2[2]}`); // => 5

c("Length:")
c(`arr.length: ${arr.length}`);
c(`buf1.length: ${buf1.length}`);
c(`buf2.length: ${buf2.length}`);


c(`buf1 = buf2 ? ${buf1.compare(buf2)}`);

for(let i=0; i<buf2.length; i++){
	c(buf2[i]);
}*/