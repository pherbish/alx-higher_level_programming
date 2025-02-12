#!/usr/bin/node
const request = require('request');

request(process.argv[2], (err, resp, body) => {
	  if (err) {
		      console.log(err);
		    }
	  const fArr = JSON.parse(body).results;
	  const actNam = 'https://swapi-api.alx-tools.com/api/people/18/';
	  let i = 0;

	  fArr.forEach(k => k.characters.includes(actNam) ? i++ : null);
	  console.log(i);
});
