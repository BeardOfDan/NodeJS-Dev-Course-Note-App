"use strict";

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  if(notes) {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length < 1) {
    notes.push(note);
    saveNotes(notes);
    return note;
    // console.log("Note Was Successfully Added");
  } else {
    // there was already a note with that title
    // console.log("Note Was A Duplicate!");
  }

}; // end of addNote = (title, body)

let getAll = () => {
  console.log("Getting all notes...");
};

let getNote = (title) => {
  console.log(`Getting the note "${title}"...`);
};

let removeNote = (title) => {
  let notes = fetchNotes();

  let filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  saveNotes(filteredNotes);

  // returns if note was erased or not
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
