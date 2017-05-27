angular.module('userSearchController',[])
.controller('userSearchController', function ($scope,$timeout) {
	var data = [
	{"name":"同仁堂","no":"983612"},
	{"name":"同仁堂","no":"983322"},
	{"name":"同仁堂","no":"921232"},
	{"name":"同仁堂","no":"9123612"}]

	$scope.search = {
		"searchResult":[],
		"startSearch":startSearchFn,
		"remove":removeFn
	};

	function removeFn () {
		$scope.search.searchResult.length = 0;
		$scope.search.content = " ";
	}
	function startSearchFn () {
		console.log('add')
		$scope.search.searchResult.length = 0;
		$timeout(function(){
			data.forEach(function (item) {
				$scope.search.searchResult.push(item);
			});
		},500)
	}

});