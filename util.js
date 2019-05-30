'use strict';

const toString = Object.prototype.toString;
const isType = (type, content) => toString.call(content) === `[object ${type}]`

/**
 * 判断对象是否为初始值
 * @param ...obj 对象
 * @return 是否为初始值
 */
exports.isEmpty = function () {
  for (let obj of arguments) {
    if (obj === null || obj === undefined) {
      return true;
    } else if (isType('String', obj) && obj.trim() === '') {
      return true;
    }
  }
  return false;
};