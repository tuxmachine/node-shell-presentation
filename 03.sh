#!/bin/bash

filename="some file.txt"
if [ ! -f $filename ]; then
  cowsay File not found
  exit 1
fi

# What's wrong here?