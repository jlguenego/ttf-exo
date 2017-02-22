'use strict';
require('angular/angular.js');
require('angular-route/angular-route.js');
require('./tt-route/tt-route.js');
require('./style.scss');
require('angular/angular-csp.css');
require('angular-spinner');

const app = angular.module('main', ['tt-route', 'angularSpinner']);


app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.isActive = (url) => {
        var path = $location.path();
        // console.log('path', path);
        return path === url;
    };
}]);

var myHeaderTmpl = require('./tmpl/myHeader.html');
app.directive('myHeader', function() {
    return {
        restrict: 'E',
        templateUrl: myHeaderTmpl
    };
});

var myBodyTmpl = require('./tmpl/myBody.html');
app.directive('myBody', function() {
    return {
        restrict: 'E',
        templateUrl: myBodyTmpl
    };
});

var myFooterTmpl = require('./tmpl/myFooter.html');
app.directive('myFooter', function() {
    return {
        restrict: 'E',
        templateUrl: myFooterTmpl
    };
});

