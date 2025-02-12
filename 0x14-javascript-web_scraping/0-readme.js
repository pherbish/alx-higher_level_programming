#!/usr/bin/node
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, fContent) => {
	  if (error) {
		      console.error(error);
		      return;
		    }
	  console.log(fContent);
});
