angular
    .module('jeviteca')
    .controller('albumsController', ['$scope', 'Albums','starredService', function($scope, Albums, starredService){
        $scope.albums = Albums.data;        
    }]);
