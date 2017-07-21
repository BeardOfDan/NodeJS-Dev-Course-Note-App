"use strict";

let addNote = (title, body) => {
  console.log("Adding note...", title, body);
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
