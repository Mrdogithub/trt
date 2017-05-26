angular.module('userinfoController',[])
.controller('userinfoController',function($scope,$timeout,httpFactory){
	$scope.userInfo = {};
	httpFactory.getUserInfo().then(function (res) {
		$scope.userInfo = res.data[0];
	});
});