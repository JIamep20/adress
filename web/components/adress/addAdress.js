module.exports = function(app) {
  app.controller('AddAdressCtrl', AddAdressCtrl);

  function AddAdressCtrl(adressesService) {
    var vm = this;
    vm.cities = [];
    vm.city = '';
    vm.model = {};

    adressesService.fetchCity()
      .then(function(response) {vm.cities = response;} );

    vm.sendRequest = function () {
      vm.model.city = vm.city;

      adressesService.postAdress(vm.model)
        .then(function(data) {
          vm.model = {};
          vm.city = '';
        })
        .catch(function(err) {console.log(err);});
    }
  }
};
