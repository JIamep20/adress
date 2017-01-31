module.exports = function (app) {
  app.controller('EditAdressCtrl', EditAdressCtrl);

  function EditAdressCtrl(adressesService, $stateParams) {
    var vm = this;
    vm.cities = [];
    vm.city = '';
    vm.model = null;

    adressesService.fetchCity()
      .then(function(response) {vm.cities = response;});

    adressesService.fetchAdress($stateParams.adressId)
      .then(function(response) {
        vm.model = response;
        vm.city = vm.model.city.id;
      });

    vm.sendRequest = function() {
      vm.model.city = vm.city;

      adressesService.updateAdress(vm.model)
        .then(function(res) {vm.model = res;})
        .catch(function(err) {console.log(err);});
    }
  }
};
