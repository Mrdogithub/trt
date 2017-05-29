    angular.module('httpFactory', ['constantModule'])
        .factory('httpFactory', function($http, SERVER,$sce) {
            var url = SERVER.url;
            var httpFactory = {
                "getVipList":getVipListFn,
                "getMDSCountList": getMDSCountListHttp,
                "getTagInfo": getTagInfoHttp,
                "getUserInfo": getUserInfoHttp,
                "getUserGoodsHistory": getUserGoodsHistoryHttp,
                "getUserHealthSuggestion": getUserHealthSuggestionHttp,
            }

            function getVipListFn () {
                return $http({method:"GET",url:SERVER.dev+"vipList.json"})
            }

            function getMDSCountListHttp(productID,MDID ,MODE ) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "getMDSCountList.json";

                } else {
                    targetUrl = SERVER.pro + "getMDSCountList.do";
                }
                return $http({ method: 'GET', url: targetUrl });
            }

            function getTagInfoHttp() {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "tag.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberTagInfoList.do";
                }
                return $http({ method: 'GET', url: targetUrl });
            }

            function getUserInfoHttp(vipId) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "userInfo.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberBaseInfoList.do?hykNo="+vipId.hykNo;

                     return  $http.jsonp($sce.trustAsResourceUrl(targetUrl), {jsonpCallbackParam: 'callback'});
                }

               // return $http({ method: 'GET', url: targetUrl,params:{"hykNo":vipId.hykNo}});
            }

            function getUserGoodsHistoryHttp() {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "history.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberBaseInfoList.do";
                }
                console.log(1, targetUrl)
                return $http({ method: 'GET', url: targetUrl });
            }

            function getUserHealthSuggestionHttp() {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "healthSuggestion.json";

                } else {
                    targetUrl = SERVER.pro + "getAllHealthAdviceList.do";
                }
                return $http({ method: 'GET', url: targetUrl });
            }

            return httpFactory;
        });
