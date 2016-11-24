var app = angular.module("redNg", []);


app.factory('postService', function () {
	var postObj = [];
	return {postObj:postObj};
});


app.controller('postCtrl', function ($scope,postService) {
	$scope.postObj = postService.postObj;

	$scope.showTwoWay = function () {
		$scope.postObj.push({postText:$scope.newPost});
		$scope.newPost = "";
	};


});

