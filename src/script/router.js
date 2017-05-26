'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
	$stateProvider.state('consumer',{
		url:'/',
		templateUrl:'consumerModule/index.html',
		controller:''
	})
	.state('consumer.overView',{ //首页
		url:'consumer/overView',
		templateUrl:'consumerModule/overview.html',
		controller:'overViewController'
	})
	.state('consumer.userSearch',{ //用户视图搜索
		url:'consumer/userSearch',
		templateUrl:'consumerModule/userSearch.html',
		controller:'userSearchController'
	})
	.state('consumer.userView',{ // 用户视图内容
		url:'consumer/userView',
		templateUrl:'consumerModule/userView.html',
		controller:''
	})
	.state('consumer.userView.userInfo',{ // 用户基本信息
		url:'/userInfo',
		templateUrl:'consumerModule/userInfo.html',
		controller:'userinfoController'
	})
	.state('consumer.userView.disease',{ // 用户慢病管理
		url:'/disease',
		templateUrl:'consumerModule/disease.html',
		controller:''
	})
	.state('consumer.userView.disease.xy',{ // 用户慢病管理 血压
		url:'/disease/xy',
		templateUrl:'consumerModule/xy.html',
		controller:''
	})
	.state('consumer.userView.disease.xt',{ // 用户慢病管理 血糖
		url:'/disease/xt',
		templateUrl:'consumerModule/xt.html',
		controller:''
	})
	.state('consumer.userView.history',{ // 用户购买历史
		url:'/history',
		templateUrl:'consumerModule/history.html',
		controller:'historyController'
	})
	.state('consumer.userView.record',{ // 用户健康档案
		url:'/record',
		templateUrl:'consumerModule/record.html',
		controller:''
	})
	.state('consumer.userView.suggestion',{ // 用户健康建议
		url:'/suggestion',
		templateUrl:'consumerModule/suggestion.html',
		controller:''
	})
	.state('consumer.userView.feature',{ // 用户标签
		url:'/feature',
		templateUrl:'consumerModule/feature.html',
		controller:'featureController'
	})
	.state('consumer.userView.dataDashboard',{ // 用户交互数仪表盘
		url:'/dataDashboard',
		templateUrl:'consumerModule/dataDashboard.html',
		controller:'dataDashboardController'
	})
	.state('consumer.productView',{ // 产品视图搜索
		url:'consumer/productView',
		templateUrl:'consumerModule/product-view.html',
		controller:'producViewController'
	})
	.state('consumer.productDetail.productInfo',{ // 产品基本信息
		url:'productInfo',
		templateUrl:'consumerModule/product-info.html',
		controller:'productInfoController'
	})
	.state('consumer.productDetail.productSale',{ // 产品销售
		url:'productSale',
		templateUrl:'consumerModule/product-sale.html',
		controller:'productSaleController'
	})
	.state('consumer.productDetail.productComments',{ // 产品评论
		url:'productComments',
		templateUrl:'consumerModule/product-comments.html',
		controller:''
	})			
	.state('consumer.productDetail',{ // 产品视图详情
		url:'consumer/productDetail',
		templateUrl:'consumerModule/product-detail.html',
		controller:''
	})

	.state('supplier',{
		url:'/',
		templateUrl:'supplierModule/index.html',
		controller:''
	})
	.state('supplier.supplierOverview',{
		url:'supplier/supplierOverview',
		templateUrl:'supplierModule/supplier-overview.html',
		controller:''
	})
	.state('supplier.supplierOverview.cc',{
		url:'/cc',
		templateUrl:'supplierModule/cc.html',
		controller:'ccController'
	})
	.state('supplier.supplierOverview.xys',{
		url:'/xys',
		templateUrl:'supplierModule/xys.html',
		controller:'ccController'
	})
	.state('supplier.supplierOverview.sq',{
		url:'/sq',
		templateUrl:'supplierModule/sq.html',
		controller:'ccController'
	})		
	$urlRouterProvider.otherwise('consumer/overView')

}]);