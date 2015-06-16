angular
    .module('jeviteca')
    .filter('uppercaseFilter', function () {
          return function (text) {
              return text.toUpperCase();
          };
});
