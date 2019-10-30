#!/usr/bin/env node
const fs = require("fs");
const git = require("simple-git")(__dirname);
const package = require("./package.json");
const { promisify } = require("util");
const args = require("yargs")
  .boolean("minor")
  .boolean("major")
  .boolean("patch").argv;

const gitAddTag = promisify(git.addTag.bind(git));
const gitCommit = promisify(git.commit.bind(git));
const gitPush = promisify(git.push.bind(git));

console.log("=> Bumping version");
const version = package.version.split(".").map(i => parseFloat(i));

if (args.patch) version[2]++;
else if (args.minor) version[1]++;
else if (args.major) version[0]++;

package.version = version.map(i => `${i}`).join(".");
fs.writeFileSync("package.json", JSON.stringify(package, null, 2));

console.log("=> Create release commit");
gitCommit(`Release version ${package.version}`, ["package.json"])
  .then(() => {
    console.log("=> Tagging commit");
    return gitAddTag(`release/${package.version}`);
  })
  .then(() => {
    console.log("=> Pushing to origin");
    gitPush("origin", "master", { "--tags": null });
  });
