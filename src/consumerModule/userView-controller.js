angular.module('userViewController',[]).controller('userViewController',function($scope,$http,$stateParams,httpFactory){
	$scope.userBaseInfo = {};
	httpFactory.getUserInfo({"hykNo":$stateParams.vipId}).then(function (res) {
	    $scope.userBaseInfo = res.data[0];
	},function (err) {
		//alert('服务器错误')
	});
});