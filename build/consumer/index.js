angular.module("dataDashboardController", [])
    .controller("dataDashboardController", function($scope) {
         $scope.data11 ={};
            $scope.data ={};
        $scope.load = function() {
            $scope.myVar = window.setInterval(myTimer,  5000);
            $scope.count = 0;

            function  myTimer() {   
                console.log("1"); 
                if ($scope.count == 0) {
                    $scope.data11 = data1;
                    $scope.count++;
                } else if ($scope.count == 1) {
                     $scope.data11 = data2;
                    $scope.count++;
                    
                } else if ($scope.count == 2) {
                    $scope.data11 = data3;
                    $scope.count++;
                }else if ($scope.count == 3) {
                    $scope.data11 = data4;
                    $scope.count++;
                } else if ($scope.count == 4) {
                    $scope.data11 = data5;
                    $scope.count++;
                } else if ($scope.count == 5) {
                    $scope.data11 = data6;
                    $scope.count++;
                } else if ($scope.count == 6) {
                    $scope.data11 = data7;
                    $scope.count++;
                } else if ($scope.count == 7) {
                    $scope.data11 = data8;
                    $scope.count++;
                } else if ($scope.count == 8) {
                    $scope.data11 = data9;
                    $scope.count++;
                } else if ($scope.count == 9) {
                    $scope.data11 = data10;
                    $scope.count = 0;
                } 
                $scope.myDate = new Date();
                $scope.$apply();
            }
        }

        $scope.myDate = new Date();
        var data1 = {};
        var data2 = {};
        var data3 = {};
        var data4 = {};
        var data5 = {};
        var data6 = {};
        var data7 = {};
        var data8 = {};
        var data9 = {};
        var data10 = {};
         $scope.data.rate = "150";
         $scope.data.rateUnit = "Bpm";
         $scope.data.capacity = "3347";
         $scope.data.capacityUnit = "ml";
         $scope.data.age = "39";
         $scope.data.ageUnit = "岁";
         $scope.data.airflow = "10";
         $scope.data.airflowUnit = "s";
         $scope.data.tmp = "37.3";
         $scope.data.tmpUnit = "℃";
         $scope.data.sleep = "8.0";
         $scope.data.sleepUnit = "h/d";
         $scope.data.sugar = "8";
         $scope.data.sugarUnit = "mmol/L";
         $scope.data.oxygen = "92";
         $scope.data.oxygenUnit = "%";
         $scope.data.pressure = "140/90";
         $scope.data.pressureUnit = "mmHg";
         $scope.data.pulse = "120";
         $scope.data.pulseUnit = "Bpm";
         $scope.data.weight = "70";
         $scope.data.weightUnit = "kg";
         $scope.data.Muscle = "35";
         $scope.data.MuscleUnit = "%";
         $scope.data.fat = "25";
         $scope.data.fatUnit = "%";
         $scope.data.metabolism = "1200";
         $scope.data.metabolismUnit = "Kcal/d";
         $scope.data.steps = "12500";
         $scope.data.stepsUnit = "步";
         $scope.data.hot = "300";
         $scope.data.hotUnit = "Kcal";
         $scope.data.rate1 = "250";
         $scope.data.rate2 = "250";
         $scope.data.rate3 = "20℃";
         $scope.data.rate4 = "100%";


        data1.steps = "6000";
        data1.hot = "1500";
        data1.rate = "80";
        data1.pulse = "80";
        data1.rate3 = "20℃";
        data1.rate4 = "50%";

        data2.steps = "6010";
        data2.hot = "1501";
        data2.rate = "78";
        data2.pulse = "82";
        data2.rate3 = "20℃";
        data2.rate4 = "50%";

        data3.steps = "6020";
        data3.hot = "1502";
        data3.rate = "80";
        data3.pulse = "80";
        data3.rate3 = "20℃";
        data3.rate4 = "50%";

        data4.steps = "6030";
        data4.hot = "1503";
        data4.rate = "80";
        data4.pulse = "82";
        data4.rate3 = "24℃";
        data4.rate4 = "49%";

        data5.steps = "6040";
        data5.hot = "1504";
        data5.rate = "79";
        data5.pulse = "85";
        data5.rate3 = "24℃";
        data5.rate4 = "49%";

        data6.steps = "6050";
        data6.hot = "1505";
        data6.rate = "83";
        data6.pulse = "81";
        data6.rate3 = "24℃";
        data6.rate4 = "49%";

        data7.steps = "6060";
        data7.hot = "1506";
        data7.rate = "84";
        data7.pulse = "80";
        data7.rate3 = "18℃";
        data7.rate4 = "54%";

        data8.steps = "6070";
        data8.hot = "1507";
        data8.rate = "82";
        data8.pulse = "82";
        data8.rate3 = "18℃";
        data8.rate4 = "54%";

        data9.steps = "6080";
        data9.hot = "1508";
        data9.rate = "81";
        data9.pulse = "84";
        data9.rate3 = "19℃";
        data9.rate4 = "54%";

        data10.steps = "6090";
        data10.hot = "1509";
        data10.rate = "84";
        data10.pulse = "77";
        data10.rate3 = "19℃";
        data10.rate4 = "54%";
        $scope.data11 = data1;
        $scope.load();

    });

angular.module("featureController", [])
    .controller("featureController", function($scope, httpFactory) {
        $scope.taglist = [];
        $scope.listLength = 0;
        $scope.load = function() {
            httpFactory.getTagInfo().then(function(res) {

                var count = 0;
                for (var key in res.data.mapTag) {
                    var tempOpt = {};
                    tempOpt.tag = key;
                    tempOpt.type = $scope.getColor(res.data.mapTag[key]);
                    $scope.taglist.push(tempOpt);
                    count++;
                }
                $scope.listLength = count;
                //     console.log($scope.taglist);


            });

           


        }
        $scope.getColor = function(type) {

            var color = '';
            switch (type) {
                case '1':
                    color = 'color_yellow';
                    break;
                case '2':
                    color = 'color_red';
                    break;
                case '3':
                    color = 'color_green';
                    break;

            }
            return color;
        }
        $scope.data1 = [];

        $scope.load();

    });

angular.module('healthSuggestionController',[])
.controller('healthSuggestionController',function($scope,httpFactory){
	$scope.imageList = {
		"ystj":["ys_1","ys_2","ys_3"],
		"ydtj":["yd_1","yd_3","yd_3"],
		"cptj":["cp_1","cp_2","cp_3"],
		"jytj":["jy_1","jy_2","jy_3"]
	}
	httpFactory.getUserHealthSuggestion().then(function(res){
		$scope.result = res.data[0];
	});
});
angular.module('historyController',[])
.controller('historyController',function ($scope,httpFactory) {
    $scope.history = {
        "show":showFn,
        "result":data
    }
    httpFactory.getUserGoodsHistory().then(function (res){
        $scope.history.result = res.data;
    });

	var data = [
	  {
        "hyk_no": "110359",
        "hykname_cx": "普通卡",
        "id": "82",
        "jf": "45",
        "mdid": "10",
        "mdmc": "北京同仁堂施小墨医药有限公司",
        "rq": "2009-09-01 00:00:00",
        "spdm": "91300229",
        "spmc": "酒萸肉(炙山茱萸)",
        "xsje": "30",
        "xssl": "300",
        "zkje": "0",
        "zkje_hy": "0"
    },
	  {
        "hyk_no": "110359",
        "hykname_cx": "普通卡",
        "id": "82",
        "jf": "45",
        "mdid": "10",
        "mdmc": "北京同仁堂施小墨医药有限公司",
        "rq": "2009-09-01 00:00:00",
        "spdm": "91300229",
        "spmc": "酒萸肉(炙山茱萸)",
        "xsje": "30",
        "xssl": "300",
        "zkje": "0",
        "zkje_hy": "0"
    }
	]


	function showFn (currentId,status) {

		
		if($('#icon_'+currentId).hasClass('fa-chevron-circle-up')){
			setTimeout(function(){
				$('#icon_'+currentId).removeClass().addClass('fa fa-chevron-circle-down');
			},300)
			$('#current_'+currentId).slideToggle();
		}else {
			setTimeout(function(){
				$('#icon_'+currentId).removeClass().addClass('fa fa-chevron-circle-up');
			},300)
			
			$('#current_'+currentId).slideToggle();
		}
		

	}
});
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

'use stirct';
angular.module("overViewController", [])
        .controller("overViewController", function($scope, $http) {
            $scope.isBeijingShow = false;
            $scope.isShanghaiShow = false;
            $scope.isZhengzhouShow = false;
            $scope.isGuangzhouShow = false;

            var myChart6 = echarts.init(document.getElementById('shell'));
            var myChart5 = echarts.init(document.getElementById('devices'));
            var myChart4 = echarts.init(document.getElementById('map'));
            var myChart3 = echarts.init(document.getElementById('platform'));
            var myChart2 = echarts.init(document.getElementById('pic'));
            var myChart = echarts.init(document.getElementById('pie'));
            myChart4.on('click', function(params) {
                console.log($scope.isShow);
                console.log(params.name);
                if (params.name == '北京') {
                    $scope.isBeijingShow = true;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '上海') {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = true;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '郑州') {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = true;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '广州') {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = true;
                } else {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = false;

                }
                $scope.$apply();
            });
            var labelTop = {
                normal: {
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b}',
                        textStyle: {
                            baseline: 'bottom'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            };
            var labelFromatter = {
                normal: {
                    label: {
                        formatter: function(params) {
                            return 100 - params.value + '%'
                        },
                        textStyle: {
                            baseline: 'top'
                        }
                    }
                },
            }
            var labelBottom = {
                normal: {
                    color: '#ccc',
                    label: {
                        show: true,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [55, 65];
            option = {
                animation: false,
                backgroundColor: '#404a59',
                color: ['#00fe00', '#f5af15', '#f5af15'],
                title: {
                    text: '集群统计指标表',
                    x: 'center',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                series: [{
                    type: 'pie',
                    center: ['15%', '50%'],
                    hoverAnimation: false,
                    radius: radius,
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    data: [{
                        name: 'other',
                        value: 66,
                        itemStyle: labelBottom
                    }, {
                        name: 'cpu使用率',
                        value: 34,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    hoverAnimation: false,
                    center: ['30%', '50%'],
                    radius: radius,
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    data: [{
                        name: 'other',
                        value: 20,
                        itemStyle: labelBottom
                    }, {
                        name: '內存使用率',
                        value: 80,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    hoverAnimation: false,
                    center: ['45%', '50%'],
                    radius: radius,
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    data: [{
                        name: 'other',
                        value: 20,
                        itemStyle: labelBottom
                    }, {
                        name: '存储占用率',
                        value: 80,
                        itemStyle: labelTop
                    }]
                }]
            };
            option2 = {
                backgroundColor: '#404a59',
                title: {
                    left: 'center',
                    top: "2%",
                    text: '流量数据统计',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#00fe00', '#f5af15', '#2d7dd9'

                ],
                legend: {
                    left: '65%',
                    top: "5%",
                    data: ['浏览次数（pv）', '门店销量（独立访客）', 'IP'],
                    textStyle: {
                        color: '#ffffff'
                    }
                },

                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#999999'
                        }
                    }

                }],
                yAxis: [{
                    min: 0,
                    max: 1500,
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#999999'
                        }
                    }

                }],
                series: [{
                    name: '浏览次数（pv）',
                    type: 'line',

                    data: [500, 800, 750, 1100, 800, 900]
                }, {
                    name: '门店销量（独立访客）',
                    type: 'line',

                    data: [500, 700, 450, 900, 800, 770]
                }, {
                    name: 'IP',
                    type: 'line',
                    data: [490, 600, 600, 900, 780, 860]
                }]
            };
            option3 = {
                color: ['#e7a617'

                ],
                xAxis: {
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    min: 0,
                    max: 500,
                    position: 'top',
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    splitNumber: 0,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    type: 'category',
                    data: ['E店宝', 'SRM', 'CRM', 'POS', 'JDE']
                },
                series: [{
                    name: '2011年',
                    type: 'bar',
                    data: [182, 234, 290, 104, 131]
                }]
            };
            option5 = {
                title: {
                    left: 'center',
                    text: '总数：432,040,050',
                    top: '8%',
                    textStyle: {
                        fontSize: 15,
                        color: '#ffffff'
                    },

                },
                grid: {
                    left: '3%',

                    bottom: '10',
                    containLabel: true
                },
                color: ['#e7a617'

                ],
                xAxis: {
                    show: false,
                    position: 'top',
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    name: '设备Top5',
                    nameTextStyle: {
                        color: '#999999'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    type: 'category',
                    data: ['天津', '本市', '华中区', '华南区', '华东区']
                },
                series: [{
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 8,
                                color: '#ffffff'
                            },
                            position: 'right',
                            formatter: function(value, index) {
                                return value.data;
                            }
                        }
                    },
                    barMinHeight: 0.01,
                    name: '2011年',
                    type: 'bar',
                    data: [46200, 41400, 42000, 44400, 43100]
                }]
            };
            option6 = {
                title: {
                    left: 'center',
                    text: '总数：238,000,000',
                    top: '8%',
                    textStyle: {
                        fontSize: 15,
                        color: '#ffffff'
                    },

                },
                grid: {
                    left: '3%',

                    bottom: '10',
                    containLabel: true
                },
                color: ['#e7a617'

                ],
                xAxis: {
                    show: false,
                    position: 'top',
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    name: '销售top5',
                    nameTextStyle: {
                        color: '#999999'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    type: 'category',
                    data: ['天津', '本市', '华中区', '华南区', '华东区']
                },
                series: [{
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 8,
                                color: '#ffffff'
                            },
                            position: 'right',
                            formatter: function(value, index) {
                                return '￥' + value.data;
                            }
                        }
                    },
                    barMinHeight: 0.01,
                    name: '2011年',
                    type: 'bar',
                    data: [18200, 21400, 22000, 10400, 13100]
                }]
            };

            var data = [{
                name: '北京',
                value: 300
            }, {
                name: '上海',
                value: 280
            }, {
                name: '广州',
                value: 280
            }, {
                name: '清远',
                value: 39
            }, {
                name: '中山',
                value: 39
            }, {
                name: '昆明',
                value: 39
            }, {
                name: '寿光',
                value: 40
            }, {
                name: '盘锦',
                value: 40
            }, {
                name: '长治',
                value: 41
            }, {
                name: '深圳',
                value: 41
            }, {
                name: '珠海',
                value: 42
            }, {
                name: '宿迁',
                value: 43
            }, {
                name: '咸阳',
                value: 43
            }, {
                name: '铜川',
                value: 44
            }, {
                name: '平度',
                value: 44
            }, {
                name: '佛山',
                value: 44
            }, {
                name: '马鞍山',
                value: 72
            }, {
                name: '宝鸡',
                value: 72
            }, {
                name: '焦作',
                value: 75
            }, {
                name: '句容',
                value: 75
            }, {
                name: '徐州',
                value: 79
            }, {
                name: '衡水',
                value: 80
            }, {
                name: '包头',
                value: 80
            }, {
                name: '绵阳',
                value: 80
            }, {
                name: '乌鲁木齐',
                value: 84
            }, {
                name: '枣庄',
                value: 84
            }, {
                name: '杭州',
                value: 84
            }, {
                name: '淄博',
                value: 85
            }, {
                name: '鞍山',
                value: 86
            }, {
                name: '溧阳',
                value: 86
            }, {
                name: '库尔勒',
                value: 86
            }, {
                name: '安阳',
                value: 90
            }, {
                name: '开封',
                value: 90
            }, {
                name: '济南',
                value: 92
            }, {
                name: '德阳',
                value: 93
            }, {
                name: '温州',
                value: 95
            }, {
                name: '九江',
                value: 96
            }, {
                name: '邯郸',
                value: 98
            }, {
                name: '临安',
                value: 99
            }, {
                name: '兰州',
                value: 99
            }, {
                name: '沧州',
                value: 100
            }, {
                name: '临沂',
                value: 103
            }, {
                name: '南充',
                value: 104
            }, {
                name: '天津',
                value: 105
            }, {
                name: '富阳',
                value: 106
            }, {
                name: '泰安',
                value: 112
            }, {
                name: '诸暨',
                value: 112
            }, {
                name: '郑州',
                value: 250
            }, {
                name: '哈尔滨',
                value: 114
            }, {
                name: '聊城',
                value: 116
            }, {
                name: '芜湖',
                value: 117
            }, {
                name: '唐山',
                value: 119
            }, {
                name: '平顶山',
                value: 119
            }, {
                name: '邢台',
                value: 119
            }, {
                name: '德州',
                value: 120
            }, ];
            var geoCoordMap = {
                '海门': [121.15, 31.89],
                '鄂尔多斯': [109.781327, 39.608266],
                '招远': [120.38, 37.35],
                '舟山': [122.207216, 29.985295],
                '齐齐哈尔': [123.97, 47.33],
                '盐城': [120.13, 33.38],
                '赤峰': [118.87, 42.28],
                '青岛': [120.33, 36.07],
                '乳山': [121.52, 36.89],
                '金昌': [102.188043, 38.520089],
                '泉州': [118.58, 24.93],
                '莱西': [120.53, 36.86],
                '日照': [119.46, 35.42],
                '胶南': [119.97, 35.88],
                '南通': [121.05, 32.08],
                '拉萨': [91.11, 29.97],
                '云浮': [112.02, 22.93],
                '梅州': [116.1, 24.55],
                '文登': [122.05, 37.2],
                '上海': [121.48, 31.22],
                '攀枝花': [101.718637, 26.582347],
                '威海': [122.1, 37.5],
                '承德': [117.93, 40.97],
                '厦门': [118.1, 24.46],
                '汕尾': [115.375279, 22.786211],
                '潮州': [116.63, 23.68],
                '丹东': [124.37, 40.13],
                '太仓': [121.1, 31.45],
                '曲靖': [103.79, 25.51],
                '烟台': [121.39, 37.52],
                '福州': [119.3, 26.08],
                '瓦房店': [121.979603, 39.627114],
                '即墨': [120.45, 36.38],
                '抚顺': [123.97, 41.97],
                '玉溪': [102.52, 24.35],
                '张家口': [114.87, 40.82],
                '阳泉': [113.57, 37.85],
                '莱州': [119.942327, 37.177017],
                '湖州': [120.1, 30.86],
                '汕头': [116.69, 23.39],
                '昆山': [120.95, 31.39],
                '宁波': [121.56, 29.86],
                '湛江': [110.359377, 21.270708],
                '揭阳': [116.35, 23.55],
                '荣成': [122.41, 37.16],
                '连云港': [119.16, 34.59],
                '葫芦岛': [120.836932, 40.711052],
                '常熟': [120.74, 31.64],
                '东莞': [113.75, 23.04],
                '河源': [114.68, 23.73],
                '淮安': [119.15, 33.5],
                '泰州': [119.9, 32.49],
                '南宁': [108.33, 22.84],
                '营口': [122.18, 40.65],
                '惠州': [114.4, 23.09],
                '江阴': [120.26, 31.91],
                '蓬莱': [120.75, 37.8],
                '韶关': [113.62, 24.84],
                '嘉峪关': [98.289152, 39.77313],
                '广州': [113.23, 23.16],
                '延安': [109.47, 36.6],
                '太原': [112.53, 37.87],
                '清远': [113.01, 23.7],
                '中山': [113.38, 22.52],
                '昆明': [102.73, 25.04],
                '寿光': [118.73, 36.86],
                '盘锦': [122.070714, 41.119997],
                '长治': [113.08, 36.18],
                '深圳': [114.07, 22.62],
                '珠海': [113.52, 22.3],
                '宿迁': [118.3, 33.96],
                '咸阳': [108.72, 34.36],
                '铜川': [109.11, 35.09],
                '平度': [119.97, 36.77],
                '佛山': [113.11, 23.05],
                '海口': [110.35, 20.02],
                '江门': [113.06, 22.61],
                '章丘': [117.53, 36.72],
                '肇庆': [112.44, 23.05],
                '大连': [121.62, 38.92],
                '临汾': [111.5, 36.08],
                '吴江': [120.63, 31.16],
                '石嘴山': [106.39, 39.04],
                '沈阳': [123.38, 41.8],
                '苏州': [120.62, 31.32],
                '茂名': [110.88, 21.68],
                '嘉兴': [120.76, 30.77],
                '长春': [125.35, 43.88],
                '胶州': [120.03336, 36.264622],
                '银川': [106.27, 38.47],
                '张家港': [120.555821, 31.875428],
                '三门峡': [111.19, 34.76],
                '锦州': [121.15, 41.13],
                '南昌': [115.89, 28.68],
                '柳州': [109.4, 24.33],
                '三亚': [109.511909, 18.252847],
                '自贡': [104.778442, 29.33903],
                '吉林': [126.57, 43.87],
                '阳江': [111.95, 21.85],
                '泸州': [105.39, 28.91],
                '西宁': [101.74, 36.56],
                '宜宾': [104.56, 29.77],
                '呼和浩特': [111.65, 40.82],
                '成都': [104.06, 30.67],
                '大同': [113.3, 40.12],
                '镇江': [119.44, 32.2],
                '桂林': [110.28, 25.29],
                '张家界': [110.479191, 29.117096],
                '宜兴': [119.82, 31.36],
                '北海': [109.12, 21.49],
                '西安': [108.95, 34.27],
                '金坛': [119.56, 31.74],
                '东营': [118.49, 37.46],
                '牡丹江': [129.58, 44.6],
                '遵义': [106.9, 27.7],
                '绍兴': [120.58, 30.01],
                '扬州': [119.42, 32.39],
                '常州': [119.95, 31.79],
                '潍坊': [119.1, 36.62],
                '重庆': [106.54, 29.59],
                '台州': [121.420757, 28.656386],
                '南京': [118.78, 32.04],
                '滨州': [118.03, 37.36],
                '贵阳': [106.71, 26.57],
                '无锡': [120.29, 31.59],
                '本溪': [123.73, 41.3],
                '克拉玛依': [84.77, 45.59],
                '渭南': [109.5, 34.52],
                '马鞍山': [118.48, 31.56],
                '宝鸡': [107.15, 34.38],
                '焦作': [113.21, 35.24],
                '句容': [119.16, 31.95],
                '北京': [116.46, 39.92],
                '徐州': [117.2, 34.26],
                '衡水': [115.72, 37.72],
                '包头': [110, 40.58],
                '绵阳': [104.73, 31.48],
                '乌鲁木齐': [87.68, 43.77],
                '枣庄': [117.57, 34.86],
                '杭州': [120.19, 30.26],
                '淄博': [118.05, 36.78],
                '鞍山': [122.85, 41.12],
                '溧阳': [119.48, 31.43],
                '库尔勒': [86.06, 41.68],
                '安阳': [114.35, 36.1],
                '开封': [114.35, 34.79],
                '济南': [117, 36.65],
                '德阳': [104.37, 31.13],
                '温州': [120.65, 28.01],
                '九江': [115.97, 29.71],
                '邯郸': [114.47, 36.6],
                '临安': [119.72, 30.23],
                '兰州': [103.73, 36.03],
                '沧州': [116.83, 38.33],
                '临沂': [118.35, 35.05],
                '南充': [106.110698, 30.837793],
                '天津': [117.2, 39.13],
                '富阳': [119.95, 30.07],
                '泰安': [117.13, 36.18],
                '诸暨': [120.23, 29.71],
                '郑州': [113.65, 34.76],
                '哈尔滨': [126.63, 45.75],
                '聊城': [115.97, 36.45],
                '芜湖': [118.38, 31.33],
                '唐山': [118.02, 39.63],
                '平顶山': [113.29, 33.75],
                '邢台': [114.48, 37.05],
                '德州': [116.29, 37.45],
                '济宁': [116.59, 35.38],
                '荆州': [112.239741, 30.335165],
                '宜昌': [111.3, 30.7],
                '义乌': [120.06, 29.32],
                '丽水': [119.92, 28.45],
                '洛阳': [112.44, 34.7],
                '秦皇岛': [119.57, 39.95],
                '株洲': [113.16, 27.83],
                '石家庄': [114.48, 38.03],
                '莱芜': [117.67, 36.19],
                '常德': [111.69, 29.05],
                '保定': [115.48, 38.85],
                '湘潭': [112.91, 27.87],
                '金华': [119.64, 29.12],
                '岳阳': [113.09, 29.37],
                '长沙': [113, 28.21],
                '衢州': [118.88, 28.97],
                '廊坊': [116.7, 39.53],
                '菏泽': [115.480656, 35.23375],
                '合肥': [117.27, 31.86],
                '武汉': [114.31, 30.52],
                '大庆': [125.03, 46.58]
            };

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            option4 = {
                backgroundColor: '#404a59',
                title: {
                    text: '同仁堂健康数据地图',
                    subtext: '2017-05-19 11:32',

                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    left: 'left',

                    bottom: '10',
                    containLabel: true
                },
                geo: {
                    layoutCenter: ['40%', '50%'],
                    layoutSize: 550,
                    map: 'china',
                    roam: false,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [{
                    type: 'scatter',
                    roam: false,
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },

                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                }, {
                    name: 'Top 5',
                    roam: false,
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,

                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }]
            };
            myChart.setOption(option);
            myChart2.setOption(option2);
            myChart3.setOption(option3);
            myChart4.setOption(option4);
            myChart5.setOption(option5);
            myChart6.setOption(option6);

        });
angular.module("productInfoController", [])
    .controller("productInfoController", function($scope, $http) {
        $scope.taglist = [];
        $scope.listLength = 0;
        $scope.load = function() {
            $http({
                method: 'GET',
                url: './data/itemDetails.json'
            }).then(function successCallback(response) {
                angular.forEach(response.data.list, function(item) {
                    var tempOpt = {};
                    tempOpt.tag = item.tag;
                    tempOpt.type = $scope.getColor(item.type);
                    $scope.taglist.push(tempOpt);
                });
                $scope.listLength = response.data.list.length;
                console.log($scope.taglist);
                // $scope.$apply();
            }, function errorCallback(response) {
                // 请求失败执行代码
            });


        }
        $scope.getColor = function(type) {
            var color = '';
            switch (type) {
                case 1:
                    color = 'color_yellow';
                    break;
                case 2:
                    color = 'color_red';
                    break;
                case 3:
                    color = 'color_green';
                    break;

            }
            return color;
        }
        $scope.data1 = [];
        $scope.load();

    });
   angular.module("productSaleController", [])
       .controller("productSaleController", function($scope, httpFactory) {
           $scope.isShow = false;
           $scope.area = '店中店DZD1_北京1翠微大厦';
           var price1 = [0, 700, 450, 1100, 800, 1300, 200, 900, 700];
           var price2 = [1100, 1300, 1600, 1600, 1700, 1200, 1300];
           var price3 = [1000, 1200, 1100, 1300, 1100, 1700, 1200, 1300];
           var price4 = [1000, 1200, 1100, 1300, 1100, 1300, 200, 900, 700];
           var price5 = [1000, 1200, 1100, 1300, 1100, 450, 1100, 800];
           var require1 = [0, 900, 600, 1400, 750, 900, 600, 1100, 650];
           var require2 = [1000, 1100, 1100, 1700, 1600, 400, 750, 900, 600];
           var require3 = [1100, 800, 1100, 1400, 1600, 1100, 1300, 1100];
           var require4 = [1100, 800, 1100, 1400, 1600, 1600, 1700, 1200, ];
           var require5 = [1100, 800, 1100, 1400, 1600, 1100, 1300, 200];
           $scope.onDateSpinnerClick = function() {
               $scope.isShow = !$scope.isShow;
           }

           $scope.load = function(productID,MDID ,MODE ) {
               httpFactory.getMDSCountList(productID,MDID ,MODE).then(function(res) {

                   var count = 0;
                   var dateList = [];
                   var sellList = [];
                   var saveList = [];

                   for (var date in res.data) {
                       dateList.push(date);
                       for (var xy in res.data[date]) {
                           sellList.push(xy);
                           saveList.push(res.data[date][xy]);
                       }

                   }
                   option.xAxis[0].data = dateList;
                   option.series[0].data = sellList;
                   option.series[1].data = saveList;
                   myChart2.setOption(option);

               });
           }
           $scope.onDateClick = function(index) {
               $scope.isShow = false;
               switch (index) {
                   case 0:
                       $scope.area = '店中店DZD1_北京1翠微大厦';
                       $scope.load(1, 13,1);
                       break;
                   case 1:
                       $scope.area = '店中店DZD1_北京1同仁堂远大路店';
                       $scope.load(1, 7,1);
                       break;
                   case 2:
                       $scope.area = '店中店DZD1_北京1同仁堂牡丹园店';
                       $scope.load(1, 203,1);
                       break;
                   case 3:
                       $scope.area = '店中店DZD1_北京1燕莎商城店';
                      $scope.load(1, 3,1);
                       break;
                   case 4:
                       $scope.area = '北京同仁堂施小墨医药有限公司';
                      $scope.load(1, 10,1);
                       break;

               }
           }
           $scope.dateLists = [{
               'date': '华东区',
               'checked': false
           }, {
               'date': '华南区',
               'checked': false
           }, {
               'date': '华中区',
               'checked': false
           }, {
               'date': '本市',
               'checked': true
           }, {
               'date': '天津',
               'checked': false
           }];
           var myChart2 = echarts.init(document.getElementById('pic'));
           option = {
               title: {
                   left: 'center',
                   top: "2%",
                   text: '门店库存@销量信息',
                   subtext: 'Jan, 2017 - Jan, 2021'
               },
               tooltip: {
                   trigger: 'axis'
               },
               color: ['#fecc7d', '#2891f1', '#f8c042'

               ],
               legend: {
                   left: '80%',
                   top: "5%",
                   data: ['门店库存', '门店销量']
               },

               calculable: true,
               xAxis: [{
                  
                   splitNumber: 5,
                   type: 'category',
                   boundaryGap: false,
                   data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
               }],
               yAxis: [{
                   min: 0,
                   max: 2000,
                   type: 'value'
               }],
               series: [{
                   name: '门店库存',
                   type: 'line',
                   areaStyle: {
                       normal: {
                           color: ['rgba(254, 204, 125, 0.3)']
                       }
                   },
                   data: [0, 700, 450, 1100, 800, 1300, 200, 900, 700]
               }, {
                   name: '门店销量',
                   type: 'line',
                   areaStyle: {
                       normal: {
                           color: ['rgba(40, 145, 241, 0.3)']
                       }
                   },
                   data: [0, 900, 600, 1400, 750, 900, 600, 1100, 650]
               }]
           };

           myChart2.setOption(option);
           $scope.load(1, 13,1);
       });

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
angular.module('recordController',[]).controller('recordController',function($scope,$state){
	$scope.record = {
		"list":[
		{"date":"2017/05/16","name":"北京第一人民医院"},
		{"date":"2017/05/13","name":"北京第一人民医院"},
		{"date":"2017/05/11","name":"北京第一人民医院"},
		{"date":"2017/05/09","name":"北京第一人民医院"},
		{"date":"2017/05/04","name":"北京第一人民医院"},
		{"date":"2017/04/16","name":"北京第一人民医院"},
		{"date":"2017/04/12","name":"北京第一人民医院"},
		{"date":"2017/04/1","name":"北京第一人民医院"},
		{"date":"2017/03/23","name":"北京第一人民医院"},
		{"date":"2017/03/12","name":"北京第一人民医院"},
		{"date":"2017/02/16","name":"北京第一人民医院"},
		{"date":"2017/01/12","name":"北京第一人民医院"}
		],
		"showDetail":showDetailFn,
		"parentStatus":true
	};

	function showDetailFn(){
		$state.go("consumer.userView.recordDetail.info")
	}


})
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
angular.module('userinfoController',[])
.controller('userinfoController',function($scope,$timeout,httpFactory){
	$scope.userInfo = {};
	httpFactory.getUserInfo().then(function (res) {
		$scope.userInfo = res.data[0];
	});
});