## Jasypt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/jasypt.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sequelize-base
[travis-image]: https://img.shields.io/travis/rickyes/jasypt.svg?style=flat-square
[travis-url]: https://travis-ci.org/rickyes/jasypt
[codecov-image]: https://codecov.io/gh/rickyes/jasypt/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/github/rickyes/jasypt?branch=master
[download-image]: https://img.shields.io/npm/dm/jasypt.svg?style=flat-square
[download-url]: https://npmjs.org/package/jasypt

org.jasypt.util.text.BasicTextEncryptor for Node.js

#### 背景
`Spring Boot` 集成 `jasypt` 对配置项进行加密，为了与 `Java` 体系保持一致，于是有了 `Jasypt.js`

#### 使用
**`SDK`**
``` js
'use strict';

const Jasypt = require('jasypt');
const jasypt = new Jasypt();
// 设置秘钥
jasypt.setPassword('G0CvDz7oJn60');
// 加密
const encryptMsg = jasypt.encrypt('admin');
// 解密
const decryptMsg = jasypt.decrypt(encryptMsg);
```

**`命令行`**
``` sh
$ jasypt -h

Usage: jasypt [options]

Options:
  -v, --version               output the version number
  -p, --password <pwd>        秘钥
  -e, --encrypt <msg>         需要加密的文本
  -d, --decrypt <encryptMsg>  需要解密的文本
  -h, --help                  output usage information

$ jasypt -p G0CvDz7oJn60 -e admin

5mLtVOnrEFqnrFuvpJbnpg==

$ jasypt -p G0CvDz7oJn60 -d 5mLtVOnrEFqnrFuvpJbnpg==

admin
```

#### 解密加密项 for Spring Boot
``` js
// 对配置项的ENC(xxx)进行解密
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

const jasypt = new Jasypt();
jasypt.setPassword('P8dEw34TgvbY');
jasypt.decryptConfig(data);
```
``` js
// 解密出来的内容
const data = {
  code: 42,
  test: {
    db: 'admin',
    pwd: {
      a: 'admin'
    },
    asad: {
      pwd: {
        str: 'str',
        host: 'admin',
        pwd: 'admin'
      }
    },
    items: [{
      user: 'user1',
      pwd: 'admin'
    }, {
      user: 'user2',
      pwd: 'admin'
    }, {
      user: 'user3',
      pwd: 'admin'
    }],
  }
};
```