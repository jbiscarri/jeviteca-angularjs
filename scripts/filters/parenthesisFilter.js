angular
    .module('jeviteca')
    .filter('parenthesisFilter', function () {
          return function (text) {
                if (typeof text != "undefined") {
                    if (text.length > 0)
                        return '('+text+')';
                    else
                        return '';
                }else{
                    return '';
                }
          };
});
