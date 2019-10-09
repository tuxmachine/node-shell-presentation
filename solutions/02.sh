#!/bin/bash

animals="🐶 🐱 🐙 🐡 🦊 🐯 🐷 "
# In this case you explicitly want the string to be used as an array, don't quote the variable
for animal in $animals; do
  echo $animal
done

# How many times will this loop run?