   angular.module("productSaleController", [])
       .controller("productSaleController", function($scope, $http) {
           $scope.isShow = false;
           $scope.area = '华东区';
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
           $scope.onDateClick = function(index) {
               $scope.isShow = false;
               switch (index) {
                   case 0:
                       $scope.area = '华东区';
                       option.series[0].data = price1;
                       option.series[1].data = require1;
                       break;
                   case 1:
                       $scope.area = '华南区';
                       option.series[0].data = price2;
                       option.series[1].data = require2;
                       break;
                   case 2:
                       $scope.area = '华中区';
                       option.series[0].data = price3;
                       option.series[1].data = require3;
                       break;
                   case 3:
                       $scope.area = '本市';
                       option.series[0].data = price4;
                       option.series[1].data = require4;
                       break;
                   case 4:
                       $scope.area = '天津';
                       option.series[0].data = price5;
                       option.series[1].data = require5;
                       break;

               }
                myChart2.setOption(option);
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
                   min: '2016',
                   max: '2022',
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
       });
