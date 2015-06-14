angular
    .module('jeviteca')
    .controller('navigationController', ['$scope', '$routeSegment', function($scope, $routeSegment){

        //Hacemos la funcionalidad accesible para la vista, tiene que colgar del $scope
        $scope.albumsRoute = function() {
            return $routeSegment.startsWith('albums');
        }

        $scope.bandsRoute = function() {
            return $routeSegment.startsWith('bands');
        }

        $scope.genresRoute = function() {
            return $routeSegment.startsWith('genres');
        }


    }]);
