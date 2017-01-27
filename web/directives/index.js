module.exports = function(app) {
  var directives = [
    'header/headerDirective.js'
  ];

  directives.forEach(function(item) {
    require('./' + item)(app);
  });
};
