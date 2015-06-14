angular
    .module('jeviteca')
    .controller('albumsController', ['$scope', 'Albums', function($scope, Albums){
        $scope.albums = Albums.data;
    }]);
