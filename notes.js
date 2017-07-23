"use strict";

const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // notes already has a default value
  }

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length < 1) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    // console.log("Note Was Successfully Added");
  } else {
    // there was already a note with that title
    // console.log("Note Was A Duplicate!");
  }

};

let getAll = () => {
  console.log("Getting all notes...");
};

let getNote = (title) => {
  console.log(`Getting the note "${title}"...`);
};

let removeNote = (title) => {
  console.log(`Removing the note "${title}"...`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
