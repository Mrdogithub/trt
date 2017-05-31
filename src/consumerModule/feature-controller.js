angular.module("featureController", [])
    .controller("featureController", function($scope, $stateParams,httpFactory) {

        
        $scope.taglist = [];
        $scope.listLength = 0;
        $scope.load = function() {
            httpFactory.getTagInfo({"hykNo":$stateParams.vipId}).then(function(res) {

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
