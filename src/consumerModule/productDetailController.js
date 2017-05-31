angular.module('productDetailController',[]).controller('productDetailController',function ($scope,$stateParams,httpFactory) {
	$scope.product = {
		"productId":$stateParams.productId
	};
})