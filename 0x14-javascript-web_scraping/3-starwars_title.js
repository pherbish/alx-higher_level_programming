#!/usr/bin/node
const request = require('request');

request('https://swapi-api.alx-tools.com/api/films/' + process.argv[2], (err, resp, body) => {
	  if (err) {
		      console.log(err);
		    }
	  console.log(JSON.parse(body).title);
});
