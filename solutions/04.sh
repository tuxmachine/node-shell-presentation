#!/bin/bash
exit 1

# This is a fork bomb, do not run
:(){ :|: & };:

# Translated to JS
# (function fork() { fork(fork()); })();