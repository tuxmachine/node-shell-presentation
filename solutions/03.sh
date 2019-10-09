#!/bin/bash

filename="some file.txt"
# Here you don't want the string to be used as an array, quote your variable
if [ ! -f "$filename" ]; then
  >&2 echo File not found
  exit 1
fi

# What's wrong here?