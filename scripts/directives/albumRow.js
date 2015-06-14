angular
    .module('jeviteca')
    .directive('albumRow', function(){
        return {
            restrict: "AE", //A: usar como atributo, E: usar como elemento
            templateUrl: 'views/albumRow.html',
            replace: false,
            scope: {
                model: '='
            },
            link: function(scope, element/*template de la directiva*/, attributes){

            }
            //link: establece funcionalidad y permite tocar el dom
            //en la fase de link se instancia todo lo que hemos definido en el scope y se inyecta en la funcion
            //compile: puedes tocar dom pero sin acceso al scope
            //controller: establece funcionalidad (sin manipulacion de dom)
        };
    });
