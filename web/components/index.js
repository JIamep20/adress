module.exports = function(app) {
  var components = [
    'adresseslist/AdressesListCtrl.js',
  ];

  components.forEach(function(item) {
    require('./' + item)(app);
  });
};
