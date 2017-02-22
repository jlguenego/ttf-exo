'use strict';

var app = angular.module('tt-route', ['ngRoute']);

var homeTmpl = require('./tmpl/home.html');
var productsTmpl = require('./tmpl/products.html');
var servicesTmpl = require('./tmpl/services.html');
var contactTmpl = require('./tmpl/contact.html');

app.config(function($routeProvider, $locationProvider) {
	'ngInject';
	$locationProvider
		.html5Mode(true)
		.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl: homeTmpl
		})
		.when('/products', {
			templateUrl: productsTmpl
		})
		.when('/services', {
			templateUrl: servicesTmpl
		})
		.when('/contact', {
			templateUrl: contactTmpl
		})
		.otherwise({
			redirectTo: '/'
		});
});
