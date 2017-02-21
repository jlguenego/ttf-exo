(function() {
    'use strict';

    var app = angular.module('main', []);

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
