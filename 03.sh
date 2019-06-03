#!/bin/bash

filename="some file.txt"
if [ ! -f $filename ]; then
  >&2 echo File not found
  exit 1
fi

# What's wrong here?