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
                    min: '2016',
                    max: '2022',
                    splitNumber:5,
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016','2017','2018','2019','2020','2021','2022']
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
                    data: [0,700, 450, 1100, 800, 1300,200,900,700]
                }, {
                    name: '门店销量',
                    type: 'line',            
                    areaStyle: {
                        normal: {
                            color: ['rgba(40, 145, 241, 0.3)']
                        }
                    },
                    data: [0,900,600,1400,750,900,600,1100,650]
                }]
            };

            myChart2.setOption(option);
        });