#!/bin/bash
# Check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Send request to the URL and get the response body size in bytes
body_size=$(curl -sI "$1" | grep -i Content-Length | awk '{print $2}' | tr -d '\r')

# Display the size of the response body in bytes
echo "$body_size"
# Get the byte size of the HTTP response header for a given URL.
curl -s "$1" | wc -c

