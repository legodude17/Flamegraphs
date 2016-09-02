var fs = require('fs');
var chain = require('slide').chain;

function readFile(file, cb) {
  fs.readFile(file, 'utf-8', cb);
}

function writeFile(file, message, cb) {
  fs.writeFile(file, message, cb);
}

function generateMessage(message, cb) {
  message = message.split('\n')[0];
  var reversed = message.split('');
  reversed.reverse();
  reversed = reversed.join('');
  setTimeout(function $$timeout1() {
    message = 'Was:\n   ' + message;
    setTimeout(function $$timeout2() {
      message = message + '\nIs now:\n   ' + reversed + '\n';
      setTimeout(function $$timeout3() {
        cb(null, message);
      }, 50)
    }, 250);
  }, 100);
}

chain([
  [readFile, 'target.txt'],
  [generateMessage, chain.last],
  [writeFile, 'result.txt', chain.last]
], process.exit);
