"use strict";

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: "Title of note",
    demand: true,
    alias: "t"
};

const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Adds a new note", { title: titleOptions , body: bodyOptions })
  .command("list", "Lists all notes")
  .command("read", "Reads a note", { title: titleOptions })
  .command("remove", "Removes a note", { title: titleOptions })
  .help()
  .argv;
let command = argv._[0];

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
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
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

