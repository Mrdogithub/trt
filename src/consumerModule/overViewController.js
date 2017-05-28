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