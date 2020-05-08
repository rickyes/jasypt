#!/usr/bin/env node

/* eslint no-console: off */
const program = require('commander');
const Jasypt = require('..');
const pkg = require('../package.json');

const jasypt = new Jasypt();

const setPassword = (value) => {
  jasypt.setPassword(value);
};


const encrypt = (msg) => {
  console.log(jasypt.encrypt(msg));
};


const decrypt = (encryptMsg) => {
  console.log(jasypt.decrypt(encryptMsg));
};

program
  .version(pkg.version, '-v, --version')
  .option('-p, --password <pwd>', 'The secret key', setPassword)
  .option('-e, --encrypt <msg>', 'Text to be encrypting', encrypt)
  .option('-d, --decrypt <encryptMsg>', 'Text to be decrypting', decrypt)
  .on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ jasypt -p 0x1995 -e admin');
    console.log('  $ jasypt -p 0x1995 -d nsbC5r0ymz740/aURtuRWw==');
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  program.help();
}
