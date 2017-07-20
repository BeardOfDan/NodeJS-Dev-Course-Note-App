"use strict";

console.log('Starting App...');

const fs = require('fs');
const os = require('os');

let user = os.userInfo().username;

fs.appendFile('greetings.txt', `Hello ${user}!`, (err) => {
  if (err) {
    console.log('Unable to write to the file');
  }
});



