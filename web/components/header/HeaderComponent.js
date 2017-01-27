module.exports = function (app) {

  function HeaderCtrl() {
    var vm = this;
    vm.name = '123';
  }

  app.component('myHeader', {
    template: require('./header.html'),
    controller: HeaderCtrl
  });
};
