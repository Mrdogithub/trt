angular.module("dataDashboardController", [])
    .controller("dataDashboardController", function($scope) {

        $scope.load = function() {
            $scope.myVar = window.setInterval(myTimer,  5000);
            $scope.count = 0;

            function  myTimer() {    
                if ($scope.count == 0) {
                  console.log("0");
                    $scope.data = $scope.data1;
                    $scope.count++;
                } else if ($scope.count == 1) {
                  console.log("1");
                    $scope.data = $scope.data2;
                    $scope.count++;
                } else if ($scope.count == 2) {
                  console.log("2");
                    $scope.data = $scope.data3;
                    $scope.count = 0;
                }
                $scope. myDate=new Date();
                $scope.$apply();
            }
        }
        
        $scope.myDate=new Date();
        $scope.data1 = {};
        $scope.data1.rate = "150";
        $scope.data1.rateUnit = "Bpm";
        $scope.data1.capacity = "3347";
        $scope.data1.capacityUnit = "ml";
        $scope.data1.age = "39";
        $scope.data1.ageUnit = "岁";
        $scope.data1.airflow = "10";
        $scope.data1.airflowUnit = "s";
        $scope.data1.tmp = "37.3";
        $scope.data1.tmpUnit = "℃";
        $scope.data1.sleep = "8.0";
        $scope.data1.sleepUnit = "h/d";
        $scope.data1.sugar = "5";
        $scope.data1.sugarUnit = "mmol/L";
        $scope.data1.oxygen = "92";
        $scope.data1.oxygenUnit = "%";
        $scope.data1.pressure = "100/90";
        $scope.data1.pressureUnit = "mmHg";
        $scope.data1.pulse = "120";
        $scope.data1.pulseUnit = "Bpm";
        $scope.data1.weight = "70";
        $scope.data1.weightUnit = "kg";
        $scope.data1.Muscle = "35";
        $scope.data1.MuscleUnit = "%";
        $scope.data1.fat = "25";
        $scope.data1.fatUnit = "%";
        $scope.data1.metabolism = "1200";
        $scope.data1.metabolismUnit = "Kcal/d";
        $scope.data1.steps = "12500";
        $scope.data1.stepsUnit = "步";
        $scope.data1.hot = "300";
        $scope.data1.hotUnit = "Kcal";
        $scope.data1.rate1 = "250";
        $scope.data1.rate2 = "250";
        $scope.data1.rate3 = "20℃";
        $scope.data1.rate4 = "100%";


        $scope.data2 = {};
        $scope.data2.rate = "110";
        $scope.data2.rateUnit = "Bpm";
        $scope.data2.capacity = "3200";
        $scope.data2.capacityUnit = "ml";
        $scope.data2.age = "39";
        $scope.data2.ageUnit = "岁";
        $scope.data2.airflow = "10";
        $scope.data2.airflowUnit = "s";
        $scope.data2.tmp = "37.5";
        $scope.data2.tmpUnit = "℃";
        $scope.data2.sleep = "9.0";
        $scope.data2.sleepUnit = "h/d";
        $scope.data2.sugar = "6";
        $scope.data2.sugarUnit = "mmol/L";
        $scope.data2.oxygen = "97";
        $scope.data2.oxygenUnit = "%";
        $scope.data2.pressure = "110/89";
        $scope.data2.pressureUnit = "mmHg";
        $scope.data2.pulse = "130";
        $scope.data2.pulseUnit = "Bpm";
        $scope.data2.weight = "60";
        $scope.data2.weightUnit = "kg";
        $scope.data2.Muscle = "37";
        $scope.data2.MuscleUnit = "%";
        $scope.data2.fat = "15";
        $scope.data2.fatUnit = "%";
        $scope.data2.metabolism = "1290";
        $scope.data2.metabolismUnit = "Kcal/d";
        $scope.data2.steps = "17500";
        $scope.data2.stepsUnit = "步";
        $scope.data2.hot = "400";
        $scope.data2.hotUnit = "Kcal";
        $scope.data2.rate1 = "250";
        $scope.data2.rate2 = "250";
        $scope.data2.rate3 = "20℃";
        $scope.data2.rate4 = "100%";


        $scope.data3 = {};
        $scope.data3.rate = "150";
        $scope.data3.rateUnit = "Bpm";
        $scope.data3.capacity = "2847";
        $scope.data3.capacityUnit = "ml";
        $scope.data3.age = "39";
        $scope.data3.ageUnit = "岁";
        $scope.data3.airflow = "10";
        $scope.data3.airflowUnit = "s";
        $scope.data3.tmp = "38.3";
        $scope.data3.tmpUnit = "℃";
        $scope.data3.sleep = "8.0";
        $scope.data3.sleepUnit = "h/d";
        $scope.data3.sugar = "9";
        $scope.data3.sugarUnit = "mmol/L";
        $scope.data3.oxygen = "90";
        $scope.data3.oxygenUnit = "%";
        $scope.data3.pressure = "100/90";
        $scope.data3.pressureUnit = "mmHg";
        $scope.data3.pulse = "120";
        $scope.data3.pulseUnit = "Bpm";
        $scope.data3.weight = "79";
        $scope.data3.weightUnit = "kg";
        $scope.data3.Muscle = "35";
        $scope.data3.MuscleUnit = "%";
        $scope.data3.fat = "25";
        $scope.data3.fatUnit = "%";
        $scope.data3.metabolism = "900";
        $scope.data3.metabolismUnit = "Kcal/d";
        $scope.data3.steps = "9000";
        $scope.data3.stepsUnit = "步";
        $scope.data3.hot = "100";
        $scope.data3.hotUnit = "Kcal";
        $scope.data3.rate1 = "250";
        $scope.data3.rate2 = "250";
        $scope.data3.rate3 = "20℃";
        $scope.data3.rate4 = "100%";
        $scope.data = $scope.data1;

         $scope.load();

    });