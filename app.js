var app = angular.module("redNg", []);

app.controller('app1', function ($scope) {
	
});

app.factory('nameService', function () {
	var personObj = [];
	return {personObj:personObj}
});