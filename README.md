## Jasypt

### org.jasypt.util.text.BasicTextEncryptor for Node.js

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