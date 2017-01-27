var angular = require('angular');
var uiRouter = require('angular-ui-router');
var app = angular.module('app', [uiRouter]);
app.controller('MainCtrl1', function MainCtrl() {
  this.hero = {
    name: 'Spawn'
  };
});
require('./router')(app);
require('./components')(app);


require('imports?jQuery=jquery!bootstrap/dist/js/bootstrap');
require('imports?jQuery=jquery!bootstrap/dist/css/bootstrap.css');
