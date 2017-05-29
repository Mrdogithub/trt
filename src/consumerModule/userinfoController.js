angular.module('userinfoController',[])
.controller('userinfoController',function($scope,$timeout,$stateParams,httpFactory){
	$scope.userInfo = {};
	console.log($)
	httpFactory.getUserInfo({"hykNo":$stateParams.vipId}).then(function (res) {
		console.log("controller")
		console.log(1,res)
		//$scope.userInfo = res.data[0];
	});
});