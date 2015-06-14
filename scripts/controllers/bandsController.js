angular
    .module('jeviteca')
    .controller('bandsController', ['$scope', 'Bands', function($scope, Bands){
        $scope.bands = Bands.data;
    }]);
