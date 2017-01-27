console.log('router loaded');

module.exports = function(app) {
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        //templateUrl: 'app/main/main.html',
        template: require('./components/adresseslist/AdressesList.html')
        //controller: 'MainController',
        //controllerAs: 'main',
        //ncyBreadcrumb: {
        //  label: 'Hydra'
        //},
        //resolve: {
        //  'title': function ($rootScope) {
        //    $rootScope.pageTitle = 'Hydra';
        //  }
        //}
      })
      .state('a', {
        url: '/a',
        template: '<h1>MA</h1>'
      });
    //$locationProvider.hash = '';
    $urlRouterProvider.otherwise('/');
  });
};



/*
*
* url: '/',
 templateUrl: 'app/main/main.html',
 controller: 'MainController',
 controllerAs: 'main',
 ncyBreadcrumb: {
 label: 'Hydra'
 },
 resolve: {
 'title': function ($rootScope) {
 $rootScope.pageTitle = 'Hydra';
 }
 }
* */
