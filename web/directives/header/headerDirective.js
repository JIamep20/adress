module.exports = function (app) {
  app.directive('headerDirective', function () {

    var directiveDefinitionObject = {
      template: require('./headerTemplate.html'),
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude) {
        this.click = function(e){
          console.log(e);
        };
      },
      controllerAs: 'ctrl'
    }
    return directiveDefinitionObject;
  });
};
