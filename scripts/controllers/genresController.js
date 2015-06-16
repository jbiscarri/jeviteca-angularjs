angular
    .module('jeviteca')
    .controller('genresController', ['$scope', 'Genres', function($scope, Genres){
        $scope.genres = Genres.data;
    }]);
