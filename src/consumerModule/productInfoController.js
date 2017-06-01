angular.module("productInfoController", [])
    .controller("productInfoController", function($scope, $http, $stateParams, httpFactory) {
        $scope.product = {
            productId: $stateParams.productId,
            productName: "",
            productCode: "",
            taglist: [],
            tags: []
        }

        $scope.listLength = 0;

        httpFactory.getAllTagInfoList({ "productId": $stateParams.productId }).then(function(res) {

            var len = 0;
            for (var key in res.data[0]) {
                len += res.data[0][key].length;

                $scope.product.taglist.push({ "key": key, "tags": res.data[0][key], "color": $scope.getColor(key) });
                for (var tag in res.data[0][key]) {
                    var tempOpt = {};
                    tempOpt.name = res.data[0][key][tag];
                    tempOpt.type = $scope.getColor(key);
                    $scope.product.tags.push(tempOpt);
                }

                // console.log(key)
                // console.log(res.data[0][key])
                // var tempOpt = {};
                // tempOpt['keyName'] = key;
                // tempOpt['tag'] = res.data[0][key].split(",");
                // tempOpt['type'] = $scope.getColor(key);
                // $scope.taglist.push(tempOpt);
                // console.log('------')
                // console.log(1,$scope.taglist)
            }
            
            console.log($scope.product.tags[3]);

            $scope.listLength = len;
            console.log($scope.product.tags);
             console.log(len);
            console.log($scope.listLength + "xxxxx");

        });


        httpFactory.getAllProductBaseInfoList({ "productId": $stateParams.productId }).then(function(res) {
            var _result = res.data[0]
            $scope.product.productName = _result.productName;
            $scope.product.productCode = _result.productCode;
        });


        $scope.getColor = function(type) {
            var color = '';
            switch (type) {
                case '主治':
                    color = 'color_yellow'
                    break;
                case '禁忌':
                    color = 'color_red'
                    break;
                case '注意事项':
                    color = 'color_green'
                    break;
                case '保健功能':
                    color = 'color_pink'
                    break;
                case '适宜人群':
                    color = 'color_brown'
                    break;
                case '不适宜人群':
                    color = 'color_darkBrown'
                    break;
            }
            return color;
        }


    });
