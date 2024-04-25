#!/usr/bin/env bash
#check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Send GET request to the URL with custom header and capture the response body
response=$(curl -s -H "X-School-User-Id: 98" "$1")

# Display the body of the response
echo "$response"

