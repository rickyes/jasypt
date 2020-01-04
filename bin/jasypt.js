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
  .option('-p, --password <pwd>', '秘钥', setPassword)
  .option('-e, --encrypt <msg>', '需要加密的文本', encrypt)
  .option('-d, --decrypt <encryptMsg>', '需要解密的文本', decrypt);

program.parse(process.argv);

program.help()