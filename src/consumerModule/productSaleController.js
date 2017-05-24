   angular.module("productSaleController", [])
        .controller("productSaleController", function($scope, $http) {
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
                    type: 'category',
                    boundaryGap: false,
                    data: ['2017', '2018', '2019', '2020', '2021']
                }],
                yAxis: [{
                    min: 0,
                    max: 1500,
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
                    data: [500, 800, 750, 1100, 800]
                }, {
                    name: '门店销量',
                    type: 'line',            
                    areaStyle: {
                        normal: {
                            color: ['rgba(40, 145, 241, 0.3)']
                        }
                    },
                    data: [490, 600, 600, 900, 780]
                }]
            };

            myChart2.setOption(option);

        });