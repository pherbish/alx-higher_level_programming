const request = require('request');

if (process.argv.length !== 3) {
	  console.error('Usage: node 6-completed_tasks.js <API_URL>');
	  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
	  if (error) {
		      console.error(error);
		      return;
		    }

	  if (response.statusCode !== 200) {
		      console.error(`Failed to fetch data. Status Code: ${response.statusCode}`);
		      return;
		    }

	  try {
		      const todos = JSON.parse(body);
		      const completedTasks = {};

		      todos.forEach(todo => {
			            if (todo.completed) {
					            if (completedTasks[todo.userId]) {
							              completedTasks[todo.userId]++;
							            } else {
									              completedTasks[todo.userId] = 1;
									            }
					          }
			          });

		      console.log(completedTasks);
		    } catch (parseError) {
			        console.error('Error parsing JSON:', parseError);
			      }
});

