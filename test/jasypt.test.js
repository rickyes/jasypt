'use strict';

const {test} = require('tap');

const Jasypt = require('..');
const password = 'G0CvDz7oJn60';
const message = 'admin';
const decryptMessage = 'c0KA89TBZ6TbLn7E6RIiFQ==';

const data = {
  code: 42,
  test: {
    db: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)',
    pwd: {
      a: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    },
    asad: {
      pwd: {
        str: 'str',
        host: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)',
        pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
      }
    },
    items: [{
      user: 'user1',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }, {
      user: 'user2',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }, {
      user: 'user3',
      pwd: 'ENC(c0KA89TBZ6TbLn7E6RIiFQ==)'
    }],
  }
};

test('encrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  const encryptMsg = jasypt.encrypt('');
  t.equal(encryptMsg, null);
  jasypt.encrypt('a');
  t.end();
});

test('decrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  let decryptMsg = '';
  decryptMsg = jasypt.decrypt(null);
  t.equal(decryptMsg, null);
  decryptMsg = jasypt.decrypt(decryptMessage);
  t.equal(decryptMsg, message);
  t.end();
});

test('encrypt & decrypt', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  const encryptMsg = jasypt.encrypt(message);
  const decryptMsg = jasypt.decrypt(encryptMsg);
  t.equal(decryptMsg, message);
  t.end();
});

test('decryptConfig', t => {
  const jasypt = new Jasypt();
  jasypt.setPassword(password);
  jasypt.decryptConfig('');
  jasypt.decryptConfig(data);
  t.equal(data.test.db, message);
  t.equal(data.test.pwd.a, message);
  t.equal(data.test.asad.pwd.str, 'str');
  t.equal(data.test.asad.pwd.pwd, message);
  t.equal(data.test.asad.pwd.host, message);
  for (const item of data.test.items) {
    t.equal(item.pwd, message);
  }
  t.end();
});


