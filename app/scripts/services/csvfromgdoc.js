'use strict';

angular.module('enlympics2014App')
	.factory('Csvfromgdoc', function Csvfromgdoc($http) {
		var url = "https://docs.google.com/spreadsheet/pub?key=0AjlCsM_470MFdEZ6QlZVTkd4UlBMd2RSbjgyckcydVE&single=true&gid=0&output=csv";
		var csvParse = $http.get(url).then(function(response) {
			console.log(response.data);
			var dataObj = {};
			var dataLines = response.data.split('\n');
			for (var i = 0; i < dataLines.length; i++) {
				dataLines[i] = dataLines[i].csvToArray()[0];
				var color = dataLines[i].pop();
				var name = dataLines[i].shift();
				var total = dataLines[i].shift();
				dataObj[i] = { 
					'color': color, 
					'name': name, 
					'total': total*1, 
					'values': dataLines[i] 
				};
			}
			return dataObj;
		});
		
		return {
			getDataAsync: function() {
				return csvParse;
			}
		};

		// return {
		// 	getDataAsync: function() {
		// 		csvParse.then(function(data) {
		//     	var json = csvToJSON(data);
		// 			return json;
		//     }
		// 	}
		// };
	});

