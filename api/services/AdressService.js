'use strict';

var Promise = require('bluebird');

module.exports = {
  getAdresses: function() {
    return Adress.find();
  }
};
