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

  /**
   * 解密对象里含有ENC(xxxx)格式的value
   * @param {Object} obj 入参配置对象
   */
  decryptConfig (obj) {
    if (!util.isType('Object', obj)) {
      return;
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (util.isType('Object', value)) {
          this.decryptConfig(value);
        } else if (util.isType('String', value)) {
          if (value.indexOf('ENC(') === 0 && value.lastIndexOf(')') === value.length - 1) {
            const encryptMsg = value.substring(4, value.length - 1);
            obj[key] = this.decrypt(encryptMsg);
          }
        } else if (util.isType('Array', value)) {
          for (const item of value) {
            if (util.isType('Object', item)) {
              this.decryptConfig(item);
            }
          }
        } else {
          continue;
        }
      }
    }
  }


}

module.exports = Jasypt;