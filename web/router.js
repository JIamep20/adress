console.log('router loaded');

module.exports = function(app) {
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        //templateUrl: 'app/main/main.html',
        template: require('./components/adresseslist/AdressesList.html'),
        controller: 'AdressesListCtrl',
        controllerAs: 'alc',
        //ncyBreadcrumb: {
        //  label: 'Hydra'
        //},
        //resolve: {
        //  'title': function ($rootScope) {
        //    $rootScope.pageTitle = 'Hydra';
        //  }
        //}
      })
      .state('addAdress', {
        url: '/add_adress',
        template: require('./components/adress/AddEditAdress.html'),
        controller: 'AddAdressCtrl',
        controllerAs: 'adressCtrl'
      })
      .state('addCity', {
        url: '/add_city',
        template: require('./components/addCity/AddCity.html'),
        controller: 'AddCityCtrl',
        controllerAs: 'acc',
      })
      .state('editAdress', {
        url: '/adress/{adressId}',
        template: require('./components/adress/AddEditAdress.html'),
        controller: 'EditAdressCtrl',
        controllerAs: 'adressCtrl'
      })
    ;
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
