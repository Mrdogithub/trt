angular.module('historyController',[])
.controller('historyController',function ($scope,$stateParams,httpFactory) {
    $scope.history = {
        "show":showFn,
        "result":data
    }
    httpFactory.getUserGoodsHistory({"hykNo":$stateParams.vipId}).then(function (res){
        console.log('history')
        console.log(1,res)
        $scope.history.result = res.data;
    });

	var data = [
	  {
        "hyk_no": "110359",
        "hykname_cx": "普通卡",
        "id": "82",
        "jf": "45",
        "mdid": "10",
        "mdmc": "北京同仁堂施小墨医药有限公司",
        "rq": "2009-09-01 00:00:00",
        "spdm": "91300229",
        "spmc": "酒萸肉(炙山茱萸)",
        "xsje": "30",
        "xssl": "300",
        "zkje": "0",
        "zkje_hy": "0"
    },
	  {
        "hyk_no": "110359",
        "hykname_cx": "普通卡",
        "id": "82",
        "jf": "45",
        "mdid": "10",
        "mdmc": "北京同仁堂施小墨医药有限公司",
        "rq": "2009-09-01 00:00:00",
        "spdm": "91300229",
        "spmc": "酒萸肉(炙山茱萸)",
        "xsje": "30",
        "xssl": "300",
        "zkje": "0",
        "zkje_hy": "0"
    }
	]


	function showFn (currentId,status) {

		
		if($('#icon_'+currentId).hasClass('fa-chevron-circle-up')){
			setTimeout(function(){
				$('#icon_'+currentId).removeClass().addClass('fa fa-chevron-circle-down');
			},300)
			$('#current_'+currentId).slideToggle();
		}else {
			setTimeout(function(){
				$('#icon_'+currentId).removeClass().addClass('fa fa-chevron-circle-up');
			},300)
			
			$('#current_'+currentId).slideToggle();
		}
		

	}
});