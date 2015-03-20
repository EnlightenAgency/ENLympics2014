'use strict';

angular.module('enlympics2014App', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/Rules', {
			templateUrl: 'views/rules.html'
		})
		.when('/Schedule', {
			templateUrl: 'views/schedule.html'
		})
		.when('/Contact', {
			templateUrl: 'views/contact.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
