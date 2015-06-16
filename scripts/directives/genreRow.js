angular
    .module('jeviteca')
    .directive('genreRow', ['starredService', function(starredService){
        return {
            restrict: "AE", //A: usar como atributo, E: usar como elemento
            templateUrl: 'views/genreRow.html',
            replace: false,
            scope: {
                model: '='
            },
            link: function(scope, element/*template de la directiva*/, attributes){
                scope.isStarred = starredService.isStarred;
                scope.updateStarredValue = starredService.updateStarredValue;
            }
        };
    }]);
