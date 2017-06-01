angular.module('leftMenuModulePro',[]).directive('leftMenuModulePro', function () {
	return {
		restrict: "E",
		template: '  <aside class="main-sidebar">'
				+'    <section class="sidebar">'
				+'      <ul class="sidebar-menu" data-widget="tree">'
				+'        <li class="treeview active">'
				+'          <a ui-sref = ".overView" ui-sref-active = "select">'
				+'            <i class="fa fa-gg"></i><span> 供应链控制塔</span>'
				+'          </a>'
				+'        </li>'
				+'        <li class="treeview">'
				+'          <a  ui-sref = ".overView" ui-sref-active = "select" style = "cursor:pointer">'
				+'            <i class="fa fa-home"></i> <span>首页</span>'
				+'          </a>'
				+'        </li>'        
				+'      </ul>'
				+'    </section>'
				+'  </aside>'
	}
});