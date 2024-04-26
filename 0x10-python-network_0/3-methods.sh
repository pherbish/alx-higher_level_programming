#!/usr/bin/env bash
#Check if URL argument is provided
if [ -z "$1" ]; then
	    echo "Usage: $0 <URL>"
	        exit 1
fi

# Send OPTIONS request to the URL and capture the Allow header
allow_header=$(curl -s -I -X OPTIONS "$1" | grep -i Allow)

# Extract and display the HTTP methods allowed by the server
echo "$allow_header" | sed 's/Allow: //' | tr -d '\r'

