angular.module('healthSuggestionController',[])
.controller('healthSuggestionController',function($scope,httpFactory){
	$scope.imageList = {
		"ystj":["ys_1","ys_2","ys_3"],
		"ydtj":["yd_1","yd_3","yd_3"],
		"cptj":["cp_1","cp_2","cp_3"],
		"jytj":["jy_1","jy_2","jy_3"]
	}
	httpFactory.getUserHealthSuggestion().then(function(res){
		$scope.result = res.data[0];
	});
});