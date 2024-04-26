#!/bin/bash
# Check if URL argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Send request to the URL and get the response headers
response_headers=$(curl -sI "$1")

# Extract the Content-Length from the response headers
body_size=$(echo "$response_headers" | grep -i Content-Length | awk '{print $2}' | tr -d '\r')

# Display the size of the response body in bytes
echo "$body_size"
