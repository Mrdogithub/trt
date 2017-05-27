    angular.module('httpFactory',['constantModule'])
.factory('httpFactory',function ($http,SERVER) {
	var url = SERVER.url;
	var httpFactory = {
		"getUserInfo":getUserInfoHttp,
		"getUserGoodsHistory":getUserGoodsHistoryHttp,
		"getUserHealthSuggestion":getUserHealthSuggestionHttp,
	}

	function getUserInfoHttp () {
		var targetUrl = "";
		if(SERVER.isDev){
			targetUrl= SERVER.dev+"userInfo.json";
			
		} else {
			targetUrl= SERVER.pro+"getAllMemberBaseInfoList.do";
		}
		return $http({ method: 'GET',url:targetUrl});
	}

	function getUserGoodsHistoryHttp (){
		var targetUrl = "";
		if(SERVER.isDev){
			targetUrl= SERVER.dev+"history.json";
			
		} else {
			targetUrl= SERVER.pro+"getAllMemberBaseInfoList.do";
		}
		console.log(1,targetUrl)
		return $http({ method: 'GET',url:targetUrl});
	}

	function getUserHealthSuggestionHttp () {
		var targetUrl = "";
		if(SERVER.isDev){
			targetUrl= SERVER.dev+"healthSuggestion.json";
			
		} else {
			targetUrl= SERVER.pro+"getAllHealthAdviceList.do.do";
		}
		return $http({ method: 'GET',url:targetUrl});
	}

	return httpFactory;
}); 