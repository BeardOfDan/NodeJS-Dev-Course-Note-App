"use strict";

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//   if (err) {
//     console.log('Unable to write to the file');
//   }
// });

// let res = notes.addNote();
// console.log(res);

console.log(`5 + 3 is ${notes.add(5, 3)}`);

