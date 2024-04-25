#!/bin/bash

# Check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Send DELETE request to the URL and capture the response body
response=$(curl -s -X DELETE "$1")

# Display the body of the response
echo "$response"

