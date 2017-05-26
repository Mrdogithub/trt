    angular.module('httpFactory',['constantModule'])
.factory('httpFactory',function ($http,constantModule) {
	var url = constantModule.url;
	var httpFactory = {
		"getUserInfo":getUserInfoHttp,
		"getUserGoodsHistory":getUserGoodsHistoryHttp,
		"getUserHealthSuggestion":getUserHealthSuggestionHttp
	}

	function getUserInfoHttp () {
		var targetUrl = "";
		if(constantModule.switchOff){
			 targetUrl= url+"getAllMemberBaseInfoList.do";
		} else {
			targetUrl= url+"userInfo.json";
		}
		
		return $http({ method: 'GET',url:targetUrl});
	}

	function getUserGoodsHistoryHttp (){

	}

	function getUserHealthSuggestionHttp () {
		
	}

	return httpFactory;
}); 