#!/usr/bin/node
const request = require('request');
const fs = require('fs');

request(process.argv[2], (err, resp, body) => {
	  if (err) {
		      console.log(err);
		    }
	  fs.writeFile(process.argv[3], body, 'utf-8', (error) => {
		      if (error) {
			            console.error(error);
			          }
		    });
});
