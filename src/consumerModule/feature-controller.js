angular.module("featureController", [])
    .controller("featureController", function($scope, $http) {
        $scope.taglist = [];
        $scope.listLength = 0;
        $scope.load = function() {
            $http({
                method: 'GET',
                url: './data/tag.json'
            }).then(function successCallback(response) {
                console.log(1,response)
                angular.forEach(response.data.list, function(item) {
                    var tempOpt = {};
                    tempOpt.tag = item.tag;
                    tempOpt.type =  $scope.getColor(item.type);
                    $scope.taglist.push(tempOpt);
                });
                 $scope.listLength= response.data.list.length ;
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