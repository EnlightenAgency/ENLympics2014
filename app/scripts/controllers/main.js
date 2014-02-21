'use strict';

angular.module('enlympics2014App')
  .controller('MainCtrl', function ($scope, Csvfromgdoc) {
    var pentIndexCalc = function(data, team) {
        var pentathalon = 0, teamPentTotals = [], pentFinished = true, pentIndex = -1
        // Figure Pentathalon Gold
        var dataIndex = 0;

        for (var d in data) {
          console.log(data[d].values);
          if (!data[d].values[20]) {
            console.log(data[d].values[20]);
            pentFinished = false; return pentIndex;
          }
          teamPentTotals[dataIndex] = 0;
          for (var k = 16; k < data[d].values.length; k++) {
            teamPentTotals[dataIndex] += data[d].values[k]*1;
          }

          teamPentTotals.sort(function compareNumbers(a, b) { return b - a; });
          dataIndex++;
        }

        console.log(pentFinished);
        if (pentFinished) {
          pentathalon = 0;  
          for (var j = 16; j < team.values.length; j++) {
            pentathalon += team.values[j]*1;
          }
          pentIndex = teamPentTotals.indexOf(pentathalon);

          console.log("pentIndex " + pentIndex);
        }

        return pentIndex;
    };
    Csvfromgdoc.getDataAsync().then(function(data) {
      var getMedals = function(team) {
        var gold = 0, silver = 0, bronze = 0, pentMedal;
        for (var i = 0; i < team.values.length; i++) {
          if (i != 15) {
            if (team.values[i] == 150) { gold++; }
            if (team.values[i] == 125) { silver++; }
            if (team.values[i] == 100) { bronze++; }
          }
        }
        
        pentMedal = pentIndexCalc(data, team);

        if (pentMedal == 0) { gold++; }
        if (pentMedal == 1) { silver++; }
        if (pentMedal == 2) { bronze++; }

        return { 'gold': gold*1, 'silver': silver*1, 'bronze': bronze*1 };
      };
      $scope.teams = data;
      $scope.medalCounts = getMedals;
      $scope.totalMedals = function (team) {
        var medals = getMedals(team);
        return medals.gold*1 + medals.silver*1 + medals.bronze*1;
      }
      $scope.pentMedal = function(team) {
        return pentIndexCalc(data, team);
      }
    });

  });