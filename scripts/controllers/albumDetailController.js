angular
    .module('jeviteca')
    .controller('albumDetailController', ['$scope', 'Albums','starredService','$routeParams', '$filter', function($scope, Albums, starredService, $routeParams, $filter){
        $scope.model = getAlbumById($routeParams.id, Albums.data);
        $scope.isStarred = starredService.isStarred;
        $scope.updateStarredValue = starredService.updateStarredValue;
        $scope.wikiLink = getWikipediaLink($scope.model.title + ' ' + $scope.model.band.name);

        function getAlbumById(albumId, albums) {
            return $filter("filter")(albums, {"id": albumId})[0];
        }

        function getWikipediaLink(data_to_search) {
            var query = encodeURIComponent(data_to_search);
            return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
        }

        $scope.youtubeLink = function getYouTubeLink(bandName, trackName) {
            var query = encodeURIComponent((bandName + " " + trackName).toLowerCase());
            return "https://www.youtube.com/results?search_query=" + query;
        }
    }]);
