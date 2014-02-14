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
      $scope.medalCounts = function(team) {
        var gold = 0, silver = 0, bronze = 0;
        for (var i = 0; i < team.values.length; i++) {
          if (team.values[i] == 150) { gold++; }
          if (team.values[i] == 125) { silver++; }
          if (team.values[i] == 100) { bronze++; }
        }
        return { 'gold': gold, 'silver': silver, 'bronze': bronze };
      };
    });
  });


/* 
{ 
  'color': color, 
  'name': name, 
  'total': total, 
  'values': dataLines[i] 
}
*/