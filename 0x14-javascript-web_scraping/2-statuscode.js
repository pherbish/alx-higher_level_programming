#!/usr/bin/node
const request = require('request');

request(process.argv[2], function (err, response, body) {
	  if (err) {
		      console.log(err);
		    }
	  console.log('code:', response && response.statusCode);
});
