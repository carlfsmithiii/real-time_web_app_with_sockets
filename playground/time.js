const moment = require('moment');

const date = moment();

// console.log(date.format());
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// console.log(date.format('h:mm a'));

const createdAt = 1234;
const createdDate = moment(createdAt);
const someTimestamp = moment().valueOf();
console.log(someTimestamp);