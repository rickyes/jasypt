'use strict';

const crypto = require('crypto');
const assert = require('assert');
const Encryptor = require('./encryptor');
const util = require('./util');

class Jasypt {

  constructor(opts = {}) {
    this._encryptor = new Encryptor();
    this._encryptor.setAlgorithm('PBEWithMD5AndDES');
    this.salt = opts.salt || crypto.randomBytes(8);
    this.iterations = opts.iterations || 1000;
    this.password = '';
  }

  /**
   * 设置秘钥
   * @param {String} password 秘钥
   */
  setPassword(password) {
    assert(!util.isEmpty(util), 'Password cannot be set empty');
    this.password = password;
  }

  /**
   * 加密
   * @param {String} message 需要加密的文本
   */
  encrypt(message) {
    if (util.isEmpty(message)) {
      return null;
    }
    return this._encryptor.encrypt(message, this.password, this.salt, this.iterations);
  }

  /**
   * 解密
   * @param {String} encryptedMessage 需要解密的文本
   */
  decrypt(encryptedMessage) {
    if (util.isEmpty(encryptedMessage)) {
      return null;
    }
    return this._encryptor.decrypt(encryptedMessage, this.password, this.iterations);
  }


}

module.exports = Jasypt;