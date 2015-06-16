angular.module('jeviteca', ['ngRoute', 'route-segment', 'view-segment']);
angular.module('jeviteca').config(
    ['$routeSegmentProvider', '$routeProvider', function( $routeSegmentProvider, $routeProvider ) {
        $routeSegmentProvider.when('/albums', 'albums');
        $routeSegmentProvider.when('/bands', 'bands')
        $routeSegmentProvider.when('/genres', 'genres');

        $routeSegmentProvider.segment('albums', {
            controller: 'albumsController',
            templateUrl: 'views/albums.html',
            resolve:{ //resuleve lo que sea antes de ir a la vista y lo inyecta como dependencia
                /*
                Albums: ['readerService', 'settingsValue', function(readerService, settingsValue) {
                    return readerService.readDataFromJSONFile( settingsValue.albumsFile );
                }]
                */
                Albums: ['albumsProvider', function(albumsProvider) {
                    return albumsProvider.readDataFromJSONFile();
                }]

            }
            /*,
            resolveFail:{
                controller:'',
                templateUrl:''
            }
            */
        });

        $routeSegmentProvider.segment('bands', {
            controller: 'bandsController',
            templateUrl: 'views/bands.html',
            resolve:{ //resuleve lo que sea antes de ir a la vista y lo inyecta como dependencia
                Bands: ['bandsProvider', function(bandsProvider) {
                    return bandsProvider.readDataFromJSONFile();
                }]
            }
        });

        $routeSegmentProvider.segment('genres', {
            controller: 'genresController',
            templateUrl: 'views/genres.html',
            resolve:{ //resuleve lo que sea antes de ir a la vista y lo inyecta como dependencia
                Genres: ['genresProvider', function(genresProvider) {
                    return genresProvider.readDataFromJSONFile();
                }]
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/albums'
        });
    }]
);
