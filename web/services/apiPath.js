var config = require('../config');
var _ = require('lodash');

module.exports = function(app) {
  app.factory('apiPath', function() {
    return function (route) {
      return '/' + _.trim(route, '/');
    }
  });
}
