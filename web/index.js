var angular = require('angular');
var uiRouter = require('angular-ui-router');
var uiGrid = require('angular-ui-grid');

var app = angular.module('app', [uiRouter, uiGrid]);

require('./router')(app);
require('./components')(app);
require('./directives')(app);
require('./services')(app);

require('imports?jQuery=jquery!bootstrap/dist/js/bootstrap');
require('imports?jQuery=jquery!bootstrap/dist/css/bootstrap.css');
