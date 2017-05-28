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
