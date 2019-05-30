'use strict';

const test = require('ava');

const Jasypt = require('.');
const password = 'G0CvDz7oJn60';
const message = 'admin';
const decryptMessage = 'c0KA89TBZ6TbLn7E6RIiFQ==';

test('encrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  const encryptMsg = jasypt.encrypt('');
  t.is(encryptMsg, null);
  jasypt.encrypt('a');
  t.pass();
});

test('decrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  let decryptMsg = '';
  decryptMsg = jasypt.decrypt(null);
  t.is(decryptMsg, null);
  decryptMsg = jasypt.decrypt(decryptMessage);
  t.is(decryptMsg, message);
  t.pass();
});

test('encrypt & decrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  const encryptMsg = jasypt.encrypt(message);
  const decryptMsg = jasypt.decrypt(encryptMsg);
  t.is(decryptMsg, message);
  t.pass();
});


