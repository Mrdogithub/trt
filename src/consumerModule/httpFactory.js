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
                "getProductList":getProductListFn,
                "getAllTagInfoList":getAllTagInfoListFn,
                "getAllProductBaseInfoList":getAllProductBaseInfoListFn
            }

            function getAllProductBaseInfoListFn (productIdObj) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    //targetUrl = SERVER.dev + "tag.json";

                } else {
                    targetUrl = SERVER.pro + "getAllProductBaseInfoList.do";
                }
                return $http({ method: 'GET', url: targetUrl,params:{"productID":productIdObj.productId}});                
            }

            function getAllTagInfoListFn (productIdObj) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "tag.json";

                } else {
                    targetUrl = SERVER.pro + "getAllTagInfoList.do";
                }

                console.log(productIdObj.productId+"productIdObj.productId")
                return $http({ method: 'GET', url: targetUrl,params:{"productID":productIdObj.productId}});
            }

            function getProductListFn () {
                return $http({method:"GET",url:SERVER.dev+"productList.json"})
            }

            function getVipListFn () {
                return $http({method:"GET",url:SERVER.dev+"vipList.json"})
            }

            function getMDSCountListHttp(productID,MDID,MODE) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "getMDSCountList.json";

                } else {
                    targetUrl = SERVER.pro + "getMDSCountList.do";
                }
                return $http({ method: 'GET', url: targetUrl,params:{"productID":productID,"MDID":MDID,"MODE":MODE} });
            }

            function getTagInfoHttp(vipId) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "tag.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberTagInfoList.do";
                }
                return $http({ method: 'GET', url: targetUrl,params:{"hykNo":vipId.hykNo}});
            }

            function getUserInfoHttp(vipId) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "userInfo.json";

                } else {
                    targetUrl = SERVER.pro + "getAllMemberBaseInfoList.do";
                }

               return $http({ method: 'GET', url: targetUrl,params:{"hykNo":vipId.hykNo}});
            }

            function getUserGoodsHistoryHttp(vipId) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "history.json";

                } else {
                    targetUrl = SERVER.pro + "getAllConsumeBaseInfoList.do";
                }
                console.log(1, targetUrl)
                return $http({ method: 'GET', url: targetUrl,params:{"hykNo":vipId.hykNo}});
            }

            function getUserHealthSuggestionHttp(vipId) {
                var targetUrl = "";
                if (SERVER.isDev) {
                    targetUrl = SERVER.dev + "healthSuggestion.json";

                } else {
                    targetUrl = SERVER.pro + "getAllHealthAdviceList.do";
                }
                return $http({ method: 'GET', url: targetUrl});
            }

            return httpFactory;
        });
