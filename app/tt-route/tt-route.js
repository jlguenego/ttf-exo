(function() {
    'use strict';

    var app = angular.module('tt-route', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {
        'ngInject';
        $locationProvider
            .html5Mode(true)
            .hashPrefix('');

        $routeProvider
			.when('/', {
				templateUrl: 'tt-route/tmpl/home.html'
			})
			.when('/products', {
				templateUrl: 'tt-route/tmpl/products.html'
			})
            .when('/services', {
				templateUrl: 'tt-route/tmpl/services.html'
			})
            .when('/contact', {
				templateUrl: 'tt-route/tmpl/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
    });

})();
