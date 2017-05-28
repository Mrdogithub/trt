angular.module('recordController',[]).controller('recordController',function($scope,$state){
	$scope.record = {
		"list":[
		{"date":"2017/05/16","name":"北京第一人民医院"},
		{"date":"2017/05/13","name":"北京第一人民医院"},
		{"date":"2017/05/11","name":"北京第一人民医院"},
		{"date":"2017/05/09","name":"北京第一人民医院"},
		{"date":"2017/05/04","name":"北京第一人民医院"},
		{"date":"2017/04/16","name":"北京第一人民医院"},
		{"date":"2017/04/12","name":"北京第一人民医院"},
		{"date":"2017/04/1","name":"北京第一人民医院"},
		{"date":"2017/03/23","name":"北京第一人民医院"},
		{"date":"2017/03/12","name":"北京第一人民医院"},
		{"date":"2017/02/16","name":"北京第一人民医院"},
		{"date":"2017/01/12","name":"北京第一人民医院"}
		],
		"showDetail":showDetailFn,
		"parentStatus":true
	};

	function showDetailFn(){
		$state.go("consumer.userView.recordDetail.info")
	}


})