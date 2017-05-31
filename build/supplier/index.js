angular.module("ccController", [])
    .controller("ccController", function($scope, $http) {
            $scope.isIndex0 = true;
            $scope.isIndex1 = false;
            $scope.isIndex2 = false;
            $scope.selectDate = '2017';
            $scope.isShow = false;
            $scope.isLowShow = false;
            $scope.dateLists = [{
                'date': 2014,
                'checked': false
            }, {
                'date': 2015,
                'checked': false
            }, {
                'date': 2016,
                'checked': false
            }, {
                'date': 2017,
                'checked': true
            }, {
                'date': 2018,
                'checked': false
            }, {
                'date': 2019,
                'checked': false
            }, {
                'date': 2020,
                'checked': false
            }, {
                'date': 2021,
                'checked': false
            }, {
                'date': 2022,
                'checked': false
            }];
            var geoCoordMap = {
                "海门": [-91.15, 43.89],
                "海门1": [91.15, 50.89],
                "海门2": [110.15, 50],
                "海门3": [130.15, 50],
                "海门4": [120.15, 35.89],
                "海门5": [85.15, 25.89],
                "海门6": [110.15, 20],
                "海门7": [-50, -10],
                "非洲": [25.15, 20]
            };
            var geoCoordMap2 = {
                "海门": [20.15, 20.89],
                "海门1": [91.15, 50.89],
                "海门2": [110.15, 60],
                "海门6": [110.15, 20],
                "海门7": [-50, -10],
                "非洲": [125.15, 30]
            };
            var geoCoordMap3 = {
                "海门": [-91.15, 43.89],
                "海门1": [91.15, 50.89],
                "海门2": [110.15, 70],
                "海门3": [130.15, 50],
                "海门4": [120.15, 35.89],
                "海门5": [85.15, 25.89]

            };
            var piontCount = 0;
            var price1 = [1100, 1400, 1100, 1500, 1600,1200,1620];
            var price2 = [0,900, 700, 1500, 765, 1200,620];
            var price3 = [0,700, 400,1200, 900, 200, 800];
            var require1 = [800, 900, 1100, 1500, 1600];
            var require2 = [1000, 1100, 1100, 1700, 1600];
            var require3 = [1100, 800, 1100, 1400, 1600];
            var make1 = [700, 1000, 1100, 1600, 1600];
            var make2 = [1200, 1400, 1500, 1100, 1700];
            var make3 = [1000, 1200, 1100, 1500, 1300];

            var convertData = function(data) {
                var res = [];
                var tmpGeoCoordMap = geoCoordMap;
                switch (piontCount) {
                    case 0:
                        tmpGeoCoordMap = geoCoordMap;
                        break;
                    case 1:
                        tmpGeoCoordMap = geoCoordMap2;
                        break;
                    case 2:
                        tmpGeoCoordMap = geoCoordMap3;
                        break;
                }
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = tmpGeoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            $scope.onDateSpinnerClick = function() {

                $scope.isShow = !$scope.isShow;
            }
            $scope.onDateClick = function(index) {
                angular.forEach($scope.dateLists, function(item) {

                    item.checked = false;

                });
                $scope.selectDate = $scope.dateLists[index].date;
                $scope.dateLists[index].checked = true;
                $scope.isShow = false;
                if ($scope.count2 == 0) {
                    option2.series[0].data = price1;
                    option2.series[1].data = require1;
                    option2.series[2].data = make1;
                    $scope.count2++;
                } else if ($scope.count2 == 1) {
                    option2.series[0].data = price2;
                    option2.series[1].data = require2;
                    option2.series[2].data = make2;
                    $scope.count2++;
                } else if ($scope.count2 == 2) {
                    option2.series[0].data = price3;
                    option2.series[1].data = require3;
                    option2.series[2].data = make3;
                    $scope.count2 = 0;
                }
                myChart2.setOption(option2);
            }
            $scope.onTabClick = function(index) {
                // switch (index) {
                //     case 0:
                //         $scope.isIndex0 = true;
                //         $scope.isIndex1 = false;
                //         $scope.isIndex2 = false;
                //         option2.series[0].data = price1;
                //         option2.series[1].data = require1;
                //         option2.series[2].data = make1;
                //         break;
                //     case 1:
                //         $scope.isIndex0 = false;
                //         $scope.isIndex1 = true;
                //         $scope.isIndex2 = false;
                //         option2.series[0].data = price2;
                //         option2.series[1].data = require2;
                //         option2.series[2].data = make2;
                //         break;
                //     case 2:
                //         $scope.isIndex0 = false;
                //         $scope.isIndex1 = false;
                //         $scope.isIndex2 = true;
                //         option2.series[0].data = price3;
                //         option2.series[1].data = require3;
                //         option2.series[2].data = make3;
                //         break;

                // }
                // piontCount = index;

                // option.series[0].data = convertData([{
                //     name: "海门",
                //     value: '光照：80%；湿度：67%；温度：27℃'
                // }, {
                //     name: "海门1",
                //     value: '光照：60%；湿度：40%；温度：37℃'
                // }, {
                //     name: "海门2",
                //     value: '光照：75%；湿度：63%；温度：23℃'
                // }, {
                //     name: "海门3",
                //     value: '光照：75%；湿度：70%；温度：18℃'
                // }, {
                //     name: "海门4",
                //     value: '光照：40%；湿度：85%；温度：16℃'
                // }, {
                //     name: "海门5",
                //     value: '光照：60%；湿度：30%；温度：30℃'
                // }, {
                //     name: "海门6",
                //     value: '光照：69%；湿度：40%；温度：29℃'
                // }, {
                //     name: "海门7",
                //     value: '光照：69%；湿度：60%；温度：28℃'
                // }, {
                //     name: "非洲",
                //     value: '光照：100%；湿度：80%；温度：22℃'
                // }]);
                // myChart.setOption(option);
                // myChart2.setOption(option2);
            }
            $scope.count = 0;
            $scope.count2 = 0;
            var myChart = echarts.init(document.getElementById('main'));
            var myChart2 = echarts.init(document.getElementById('pic'));
            $scope.isBeijingShow = false;
            $scope.isShanghaiShow = false;
            $scope.isZhengzhouShow = false;
            $scope.isGuangzhouShow = false;
            myChart.on('click', function(params) {
                if (params.name == '海门3') {
                    $scope.isBeijingShow = true;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '海门4') {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = true;
                    $scope.isZhengzhouShow = false;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '海门6') {
                    $scope.isBeijingShow = false;
                    $scope.isShanghaiShow = false;
                    $scope.isZhengzhouShow = true;
                    $scope.isGuangzhouShow = false;
                } else if (params.name == '非洲') {
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
                if ($scope.count == 0) {
                    option2.series[0].data = price1;
                    option2.series[1].data = require1;
                    option2.series[2].data = make1;
                    $scope.count++;
                } else if ($scope.count == 1) {
                    option2.series[0].data = price2;
                    option2.series[1].data = require2;
                    option2.series[2].data = make2;
                    $scope.count++;
                } else if ($scope.count == 2) {
                    option2.series[0].data = price3;
                    option2.series[1].data = require3;
                    option2.series[2].data = make3;
                    $scope.count = 0;
                }
                myChart2.setOption(option2);
            });
            option = {
                backgroundColor: '#3c8dbc', //背景色
                // 缩放漫游组件，仅对地图有效  
                // tooltip: {

                //     trigger: 'item',
                //     formatter: function(params) {
                //         return params.value[2];
                //     }
                // },
                roamController: {
                    // 显示策略，可选为：true（显示） | false（隐藏）  
                    show: true,
                    // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                    x: 'left',
                    // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                    y: 'bottom',
                    // 指定宽度，决定4向漫游圆盘大小，可指定 {number}（宽度，单位px）  
                    width: 120,
                    // 指定高度，缩放控制键默认会在指定高度的最下方最大化显示，可指定 {number}（高度，单位px）  
                    height: 200,
                    // 缩放漫游组件背景颜色，默认透明  

                    // 缩放漫游组件边框线宽，单位px，默认为0（无边框）  
                    borderWidth: 1,
                    // 缩放漫游组件内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                    padding: [15, 15, 15, 15],
                    // 漫游组件文字填充颜色  
                    fillerColor: '#000',
                    // 控制手柄主体颜色  
                    handleColor: '#e3655a',
                    // 4向漫游移动步伐，单位px  
                    step: 10,
                    // 必须，指定漫游组件可控地图类型  
                    mapTypeControl: {
                        'world': true
                    }
                },
                geo: {
                    map: 'world',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#3c8dbc',
                            areaColor: '#ffffff'
                        },
                        emphasis: {
                            areaColor: '#bbd9e9'
                        }
                    }
                },
                series: [{
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                if (params.data.name == '海门' || params.data.name == '海门4' || params.data.name == '海门6' || params.data.name == '海门1' || params.data.name == '非洲') {

                                    return '#faa4c7';
                                } else {
                                    return '#fdc343';
                                }
                            }

                        }
                    },
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData([{
                        name: "海门",
                        value: '光照：80%；湿度：67%；温度：27℃'
                    }, {
                        name: "海门1",
                        value: '光照：60%；湿度：40%；温度：37℃'
                    }, {
                        name: "海门2",
                        value: '光照：75%；湿度：63%；温度：23℃'
                    }, {
                        name: "海门3",
                        value: '光照：75%；湿度：70%；温度：18℃'
                    }, {
                        name: "海门4",
                        value: '光照：40%；湿度：85%；温度：16℃'
                    }, {
                        name: "海门5",
                        value: '光照：60%；湿度：30%；温度：30℃'
                    }, {
                        name: "海门6",
                        value: '光照：69%；湿度：40%；温度：29℃'
                    }, {
                        name: "海门7",
                        value: '光照：69%；湿度：60%；温度：28℃'
                    }, {
                        name: "非洲",
                        value: '光照：100%；湿度：80%；温度：22℃'
                    }]),
                }, ]
            };
            option2 = {
                backgroundColor: '#ffffff', //背景色
                title: {
                    left: 'center',
                    top: "2%",
                    text: '产量-年份，价格-年份趋势图',
                    subtext: 'Jan, 2017 - Jan, 2021'
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#fecc7d', '#2891f1', '#f8c042'

                ],
                calculable: true,
                legend: {
                    left: '80%',
                    data: ['价格', '原材料产量', '原材料需求']
                },
                xAxis: [{

                    type: 'category',
                    data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
                }],
                yAxis: [{
                    max: 2000,
                    type: 'value',
                    name: '价格',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }, {
                    max: 2000,
                    type: 'value',
                    name: '产量',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [

                    {
                        radius: '50%',
                        name: '价格',
                        type: 'bar',
                        barWidth: 60,
                        data: [1100, 1400, 1100, 1500, 1600, 1200, 1620]
                    }, {
                        radius: '50%',
                        name: '原材料产量',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                color: ['rgba(40, 145, 241, 0.3)']
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 8,
                                    color: ['rgba(40, 145, 241)']
                                },
                                position: 'bottom',
                                formatter: function(value, index) {
                                    if (value.data == 765) {
                                        return value.data;
                                    } else {
                                        return '';
                                    }

                                }
                            }
                        },
                        data: [0, 900, 700, 1500, 765, 1200, 620]
                    }, {
                        radius: '50%',
                        name: '原材料需求',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                color: ['rgba(254, 204, 125, 0.3)']
                            }
                        },
                        yAxisIndex: 1,
                        data: [0, 700, 400, 1200, 900, 200, 800]
                    }
                ]
            };
            option3 = {
                backgroundColor: '#ffffff', //背景色
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: 'left',
                    top: '12%',
                    containLabel: true
                },
                color: ['#fecc7d', '#2891f1', '#f8c042'

                ],
                calculable: true,
                legend: {
                    left: '65%',
                    data: ['价格', '原材料产量', '原材料需求']
                },
                xAxis: [{

                    type: 'category',
                    data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
                }],
                yAxis: [{
                    max: 2000,
                    type: 'value',
                    name: '价格',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }, {
                    max: 2000,
                    type: 'value',
                    name: '产量',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [

                    {
                        radius: '50%',
                        name: '价格',
                        type: 'bar',
                        barWidth: 60,
                        data: [1100, 1400, 1100, 1500, 1600, 1200, 1620]
                    }, {
                        radius: '50%',
                        name: '原材料产量',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                color: ['rgba(40, 145, 241, 0.3)']
                            }
                        },
                        data: [0, 900, 700, 1500, 765, 1200, 620]
                    }, {
                        radius: '50%',
                        name: '原材料需求',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                color: ['rgba(254, 204, 125, 0.3)']
                            }
                        },
                        yAxisIndex: 1,
                        data: [0, 700, 400, 1200, 900, 200, 800]
                    }
                ]
            };
            myChart2.on('click', function(params) {
                if (params.value == 1600 || params.value == 765) {
                    $scope.isLowShow = true;
                    $scope.$apply();
                    myChart2.setOption(option2);
                } else {
                    $scope.isLowShow = false;
                    $scope.$apply();
                    myChart2.setOption(option2);
                }
            });
            $scope.isIndex10 = true;
            $scope.isIndex11 = false;
            $scope.isIndex12 = false;
            $scope.onTabClick2 = function(index) {
                switch (index) {
                    case 0:
                        $scope.isIndex10 = true;
                        $scope.isIndex11 = false;
                        $scope.isIndex12 = false;
                        option3.series[0].data = price1;
                        option3.series[1].data = require1;
                        option3.series[2].data = make1;
                        break;
                    case 1:
                        $scope.isIndex10 = false;
                        $scope.isIndex11 = true;
                        $scope.isIndex12 = false;
                        option3.series[0].data = price2;
                        option3.series[1].data = require2;
                        option3.series[2].data = make2;
                        break;
                    case 2:
                        $scope.isIndex10 = false;
                        $scope.isIndex11 = false;
                        $scope.isIndex12 = true;
                        option3.series[0].data = price3;
                        option3.series[1].data = require3;
                        option3.series[2].data = make3;
                        break;

                }
                 myChart3.setOption(option3);
            }
                myChart.setOption(option);
                myChart2.setOption(option2);
                var myChart3 = echarts.init(document.getElementById('low'));
                myChart3.setOption(option3);
            });

'use stirct';