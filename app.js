"use strict";

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Dan'));

let filteredArray = _.uniq(['Dan', 1, 'Dan', 1, 2, 3, 4]);
console.log(filteredArray);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//   if (err) {
//     console.log('Unable to write to the file');
//   }
// });

// let res = notes.addNote();
// console.log(res);

// console.log(`5 + 3 is ${notes.add(5, 3)}`);

