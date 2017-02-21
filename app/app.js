(function() {
    'use strict';

    var app = angular.module('main', ['tt-route']);


    app.run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.isActive = function(url) {
            var path = $location.path();
            //console.log('path', path);
            return path === url;
        };
    }]);

    app.directive('myHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/myHeader.html'
        };
    });
    app.directive('myBody', function() {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/myBody.html'
        };
    });
    app.directive('myFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/myFooter.html'
        };
    });

})();
