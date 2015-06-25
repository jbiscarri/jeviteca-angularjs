angular
    .module('jeviteca')
    .controller('albumsController', ['$scope', 'Albums','starredService','$filter', function($scope, Albums, starredService, $filter){
        $scope.albums = Albums.data;
        $scope.$watch('albumFilter', function(value) {
            if (value) {
                $scope.albums = $filter("filter")(Albums.data, {$: value});
            } else {
                $scope.albums = Albums.data;
            }
        });
    }]);
