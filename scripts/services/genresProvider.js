angular      .module("jeviteca")      .service('genresProvider', ['$http', 'settingsValue', function($http, settingsValue) {            this.readDataFromJSONFile = function( filename ) {                  return $http.get(settingsValue.dataFolder + '/' + settingsValue.genresFile, {                      cache: false                  });            };        }]);