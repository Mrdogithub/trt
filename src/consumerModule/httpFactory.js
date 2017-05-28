    angular.module('httpFactory', ['constantModule'])
        .factory('httpFactory', function($http, SERVER) {
            var url = SERVER.url;
            var httpFactory = {
                "getMDSCountList": getMDSCountListHttp,
                "getTagInfo": getTagInfoHttp,
                "getUserInfo": getUserInfoHttp,
                "getUserGoodsHistory": getUserGoodsHistoryHttp,
                "getUserHealthSuggestion": getUserHealthSuggestionHttp,
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

            function getUserInfoHttp() {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "userInfo.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberBaseInfoList.do";
                }
                return $http({ method: 'GET', url: targetUrl });
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
