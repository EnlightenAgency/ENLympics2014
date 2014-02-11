'use strict';

angular.module('enlympics2014App')
  .controller('MainCtrl', function ($scope, Csvfromgdoc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Csvfromgdoc.getDataAsync().then(function(data) {
    	$scope.csvData = data;
    	$scope.teamNames = Object.keys(data);
    });
  });
