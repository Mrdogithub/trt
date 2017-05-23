'use stirct';

angular.module('letMenuModule',[]).directive('leftmenuComponent', function () {
	return {
		restrict: "E",
		template: '  <aside class="main-sidebar">'
				+'    <section class="sidebar">'
				+'      <ul class="sidebar-menu" data-widget="tree">'
				+'        <li class="treeview active">'
				+'          <a ui-sref = ".overView" ui-sref-active = "select">'
				+'            <i class="fa fa-gg"></i><span> 消费者洞察平台</span>'
				+'          </a>'
				+'        </li>'
				+'        <li class="treeview">'
				+'          <a  ui-sref = ".overView" ui-sref-active = "select">'
				+'            <i class="fa fa-home"></i> <span>首页</span>'
				+'          </a>'
				+'        </li>'
				+'        <li class="treeview">'
				+'          <a href="#"  ui-sref = ".userSearch" ui-sref-active = "select">'
				+'            <i class="fa fa-circle-o"></i> <span>用户视图</span>'
				+'          </a>'
				+'        </li>'
				+'       <li class="treeview">'
				+'          <a ui-sref = ".productView" ui-sref-active = "select">'
				+'            <i class="fa fa-circle-o"></i> <span>产品视图</span>'
				+'          </a>'
				+'        </li>'        
				+'      </ul>'
				+'    </section>'
				+'  </aside>'
	}
});