module.exports = function(app) {
  var components = [
    'adresseslist/AdressesListCtrl.js',
    'header/HeaderComponent.js',
  ];

  components.forEach(function(item) {
    require('./' + item);
  });
};
