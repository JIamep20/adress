module.exports = function(app) {
  var services = [

  ];

  services.forEach(function(item) {
    require('./' + item)(app);
  });
};
