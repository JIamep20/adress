var angular = require('angular');
var uiRouter = require('angular-ui-router');
var uiGrid = require('angular-ui-grid');
var ngAnimate = require('angular-animate');

var app = angular.module('app', [uiRouter, uiGrid, 'ui.grid.infiniteScroll', ngAnimate]);

app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

// app.run(function($animate) {
//   $animate.enabled(true);
// });

require('./router')(app);
require('./components')(app);
require('./directives')(app);
require('./services')(app);

require('imports?jQuery=jquery!bootstrap/dist/js/bootstrap');
require('imports?jQuery=jquery!bootstrap/dist/css/bootstrap.css');
require('angular-ui-grid/ui-grid.min.css');

require('./styles/styles.scss');