'use strict';
require('angular/angular.js');
require('angular-route/angular-route.js');
require('./tt-route/tt-route.js');
require('./style.scss');
require('angular/angular-csp.css');

const app = angular.module('main', ['tt-route']);


app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.isActive = (url) => {
        var path = $location.path();
        // console.log('path', path);
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

