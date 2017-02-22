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
			templateUrl: productsTmpl,
			controller: 'ProductCtrl'
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

app.controller('ProductCtrl', function ProductCtrl($scope, $http, $rootScope, $q) {
	'ngInject';
	$scope.messages = [];
	$q.when('start').then(function() {
		$rootScope.showSpinner = true;
		return $http.get('/ws/s1');
	}).then(function(response) {
		console.log('response s1', response);
		$scope.messages.push(response.data);
		return $q.all([$http.get('/ws/s2'), $http.get('/ws/s3'), $http.get('/ws/s4')]);
	}).then(function(responses) {
		console.log('responses s2-3-4', responses);
		var datas = responses.map((n) => n.data);
		Array.prototype.push.apply($scope.messages, datas);
		return $http.get('/ws/s5');
	}).then(function(response) {
		console.log('response s5', response);
		$scope.messages.push(response.data);
	}).finally(function() {
		$rootScope.showSpinner = false;
	}).catch(function(error) {
		console.log('error', error);
	});
});
