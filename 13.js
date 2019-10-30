#!/usr/bin/env node

const fs = require('fs');
const https = require('https');

const commitMsg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8');
const commitSubject = commitMsg.split('\n')[0];
const author = process.env.GIT_AUTHOR_NAME;

const req = https.request({
  host: "hooks.slack.com",
  path: "/services/T9R49F13P/BPLP5RLUA/oWE1RKAFmsMZbS9OXVE3zGDA",
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}, () => null)
req.write(`{"text": "*${author}* made a commit: \`${commitSubject}\`"}`);
req.end();
