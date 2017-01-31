module.exports = function(app) {
  app.controller('AddCityCtrl', controller);

  function controller($scope, $http, adressesService) {
    var vm = this;
    vm.city = '';
    vm.error = '';
    vm.description = '';

    vm.sendRequest = sendRequest;

    function sendRequest() {
      clearAlerts();
      adressesService.createCity({name: vm.city, description: vm.description})
        .then(function (response) {
          // vm.success = 'City ' + response.data.name + ' added succesfully';
          vm.city = '';
          vm.description = '';
          vm.AddCityForm.$setPristine();
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    function clearAlerts() {
      vm.success = '';
    }
  }
}
