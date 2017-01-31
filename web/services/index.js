module.exports = function(app) {
  var services = [
    'apiPath.js',
    'adressesService.js'
  ];

  services.forEach(function(item) {
    require('./' + item)(app);
  });
};
