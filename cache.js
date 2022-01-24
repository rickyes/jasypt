'use strict';

const LRU = require('lru-cache');

module.exports = new LRU(2000);