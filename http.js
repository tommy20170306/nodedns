const http = require('http');
const express = require('express');
const app = express();
const c = console.log;

setInterval(() => {
	http.get('http://cp.dev', (res) => {
		app.get('/', (req2, res2) => {
			res2.send("<a href='http://cp.dev/dashboard'>GOOGLE</a>");
			res2.setHeader('Content-Type', 'application/json');
			res2.send(JSON.stringify(res.headers));
		});

		c(JSON.stringify(res.headers));
	});
},1000);

app.listen(3030);