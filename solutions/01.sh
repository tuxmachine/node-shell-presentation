#!/bin/bash

# Instruct bash to stop executing script when it encounters an error
set -e

# Instruct bash to stop executing when an unknown variable is encountered
set -u

non-existing-command $UNKNOWN_VARIABLE
echo "Will this print?"