angular.module('userSearchController',[])
.controller('userSearchController', function ($scope,$timeout,httpFactory) {
	var data = [];
	httpFactory.getVipList().then(function (res) {
		data = res.data;
	});
	$scope.search = {
		"searchResult":[],
		"startSearch":startSearchFn,
		"remove":removeFn,
		"searchKey":searchKeyFn
	};

	function searchKeyFn (key) {
		$scope.search.content = key;
		$scope.search.searchResult.length = 0;
		var _filterData = data;
		_filterData.map(function(item){
			if(item.tags.length){
				item.tags.forEach(function (tag) {
					if(tag === key) {
						$scope.search.searchResult.push(item);
					}
				});
			}
		});
	}

	function removeFn () {
		$scope.search.searchResult.length = 0;
		$scope.search.content = " ";
	}
	function startSearchFn () {
		$scope.search.searchResult.length = 0;
		$timeout(function(){
			httpFactory.getVipList().then(function (res) {
				$scope.search.searchResult = res.data;
			});
		},500)
	}

});