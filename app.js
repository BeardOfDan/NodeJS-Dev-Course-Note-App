"use strict";

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

let command = argv._[0];

console.log('Command: ' + command);
console.log("Yargs", argv);

switch(command) {
  case "add":
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log("The note was successfully created!");
      notes.logNote(note);
    } else {
      console.log("There is already a note of that title!");
    }
    break;
  case "list":
    notes.getAll();
    break;
  case "read":
    let thisNote = notes.getNote(argv.title);
    if (thisNote) {
      notes.logNote(thisNote);
    } else {
      console.log("Note not found!");
    }
    break;
  case "remove":
    let removed = notes.removeNote(argv.title);
    if (removed) {
      console.log("The note was removed");
    } else {
      console.log("The note was not found");
    }
    break;
  case undefined:
  case "":
  case " ":
    console.log("Command not found");
    break;
  default:
    console.log("Command not recognized");
}

