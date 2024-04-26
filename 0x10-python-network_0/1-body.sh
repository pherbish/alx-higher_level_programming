#!/usr/bin/env bash
#Check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Send GET request to the URL and capture the response body
response=$(curl -s -o response.txt -w "%{http_code}" "$1")

# Check if the response status code is 200 (OK)
if [ "$response" -eq 200 ]; then
	    cat response.txt
    else
	        echo "Non-200 status code: $response"
fi

# Clean up - remove the temporary response file
rm -f response.txt
