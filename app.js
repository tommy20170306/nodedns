const express = require('express');
const dns = require('dns');
const app = express();
const port = process.env.PORT || 3001;
const c = console.log;
const d = "hk.yahoo.com";

app.get('/', (req, res) => {
	res.send("Start");
});

//c(dns.getServers());

dns.resolveSoa(d, (err, addresses) => {
	c(addresses);
});


app.listen(port);