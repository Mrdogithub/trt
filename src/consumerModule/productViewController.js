angular.module('producViewController',[])
.controller('producViewController', function ($scope,$timeout) {
	var data = [
	{"name":"枸杞子","no":"983612"},
	{"name":"枸杞子","no":"983322"},
	{"name":"枸杞子","no":"921232"},
	{"name":"枸杞子","no":"9123612"}]

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