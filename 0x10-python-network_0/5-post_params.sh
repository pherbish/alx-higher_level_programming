#!/usr/bin/env bash
#check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Define the POST data with email and subject parameters
post_data="email=test@gmail.com&subject=I%20will%20always%20be%20here%20for%20PLD"

# Send POST request to the URL with custom data and capture the response body
response=$(curl -s -X POST -d "$post_data" "$1")

# Display the body of the response
echo "$response"
