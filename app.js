"use strict";

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];

console.log('Command: ' + command);
console.log(process.argv);

switch(command) {
  case "add":
    console.log("Adding new note...");
    break;
  case "list":
    console.log("Listing all notes...");
    break;
  case "read":
    console.log("Reading note...");
    break;
  case "remove":
    console.log("Removing note...");
    break;
  case undefined:
  case "":
  case " ":
    console.log("Command not found");
    break;
  default:
    console.log("Command not recognized");
}

