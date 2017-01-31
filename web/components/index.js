module.exports = function(app) {
  var components = [
    'adresseslist/AdressesListCtrl.js',
    'addCity/addCityCtrl.js',
    'adress/addAdress.js',
    'adress/editAdress.js',
  ];

  components.forEach(function(item) {
    require('./' + item)(app);
  });
};
