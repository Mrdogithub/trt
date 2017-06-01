'use strict';

angular.module('headerModule',[]).directive('headerComponent', function () {
	console.log('header')
	return {
		restrict: "E",
		template:'<header class="main-header" >'
				+'<a class="logo" style = "text-align:left;">'
				+'     <img src = "images/trtlogo.jpeg" width = "120" height = "auto"/>'
				+'    </a>'
				+'    <nav class="navbar navbar-static-top">'
				+'      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">'
				+'        <span class="sr-only">Toggle navigation</span>'
				+'      </a>'
				+'		<div class = "menu-wrapper">'
				+'			<div class = "item bg-green" ui-sref = "consumer.overView" ui-sref-active = "selected"> 消费者洞察平台</div>'
				+'			<div class = "item bg-yellow" ui-sref = "supplier.supplierOverview.cc" ui-sref-active = "selected"> 供应链控制塔</div>'
				+'		</div>'
				+'      <div class="navbar-custom-menu">'
				+'        <ul class="nav navbar-nav">'
				+'          <li class="dropdown user user-menu">'
				+'            <a href="#" class="dropdown-toggle" data-toggle="dropdown">'
				+'                <i class = "fa fa-user-circle-o"></i>'
				+'              <span class="hidden-xs">admin</span>'
				+'            </a>'
				+'            <ul class="dropdown-menu">'
				+'              <li class="user-header">'
				+'                <i class = "fa fa-user-circle-o"></i>'
				+'                <p>'
				+'                   admin'
				+'                  <small>Member since Nov. 2012</small>'
				+'                </p>'
				+'              </li>'
				+'              <li class="user-footer">'
				+'                <div class="pull-right">'
				+'                  <a href="#" class="btn btn-default btn-flat">Sign out</a>'
				+'                </div>'
				+'              </li>'
				+'            </ul>'
				+'          </li>'
				+'        </ul>'
				+'      </div>'
				+'    </nav>'
				+'  </header>'
	}
});