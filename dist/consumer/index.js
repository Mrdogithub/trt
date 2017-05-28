angular.module("dataDashboardController",[]).controller("dataDashboardController",function(e){e.data11={},e.data={},e.load=function(){function d(){console.log("1"),0==e.count?(e.data11=t,e.count++):1==e.count?(e.data11=a,e.count++):2==e.count?(e.data11=o,e.count++):3==e.count?(e.data11=n,e.count++):4==e.count?(e.data11=l,e.count++):5==e.count?(e.data11=r,e.count++):6==e.count?(e.data11=i,e.count++):7==e.count?(e.data11=s,e.count++):8==e.count?(e.data11=u,e.count++):9==e.count&&(e.data11=c,e.count=0),e.myDate=new Date,e.$apply()}e.myVar=window.setInterval(d,5e3),e.count=0},e.myDate=new Date;var t={},a={},o={},n={},l={},r={},i={},s={},u={},c={};e.data.rate="150",e.data.rateUnit="Bpm",e.data.capacity="3347",e.data.capacityUnit="ml",e.data.age="39",e.data.ageUnit="岁",e.data.airflow="10",e.data.airflowUnit="s",e.data.tmp="37.3",e.data.tmpUnit="℃",e.data.sleep="8.0",e.data.sleepUnit="h/d",e.data.sugar="8",e.data.sugarUnit="mmol/L",e.data.oxygen="92",e.data.oxygenUnit="%",e.data.pressure="140/90",e.data.pressureUnit="mmHg",e.data.pulse="120",e.data.pulseUnit="Bpm",e.data.weight="70",e.data.weightUnit="kg",e.data.Muscle="35",e.data.MuscleUnit="%",e.data.fat="25",e.data.fatUnit="%",e.data.metabolism="1200",e.data.metabolismUnit="Kcal/d",e.data.steps="12500",e.data.stepsUnit="步",e.data.hot="300",e.data.hotUnit="Kcal",e.data.rate1="250",e.data.rate2="250",e.data.rate3="20℃",e.data.rate4="100%",t.steps="6000",t.hot="1500",t.rate="80",t.pulse="80",t.rate3="20℃",t.rate4="50%",a.steps="6010",a.hot="1501",a.rate="78",a.pulse="82",a.rate3="20℃",a.rate4="50%",o.steps="6020",o.hot="1502",o.rate="80",o.pulse="80",o.rate3="20℃",o.rate4="50%",n.steps="6030",n.hot="1503",n.rate="80",n.pulse="82",n.rate3="24℃",n.rate4="49%",l.steps="6040",l.hot="1504",l.rate="79",l.pulse="85",l.rate3="24℃",l.rate4="49%",r.steps="6050",r.hot="1505",r.rate="83",r.pulse="81",r.rate3="24℃",r.rate4="49%",i.steps="6060",i.hot="1506",i.rate="84",i.pulse="80",i.rate3="18℃",i.rate4="54%",s.steps="6070",s.hot="1507",s.rate="82",s.pulse="82",s.rate3="18℃",s.rate4="54%",u.steps="6080",u.hot="1508",u.rate="81",u.pulse="84",u.rate3="19℃",u.rate4="54%",c.steps="6090",c.hot="1509",c.rate="84",c.pulse="77",c.rate3="19℃",c.rate4="54%",e.data11=t,e.load()}),angular.module("featureController",[]).controller("featureController",function(e,t){e.taglist=[],e.listLength=0,e.load=function(){t.getTagInfo().then(function(t){var a=0;for(var o in t.data.mapTag){var n={};n.tag=o,n.type=e.getColor(t.data.mapTag[o]),e.taglist.push(n),a++}e.listLength=a})},e.getColor=function(e){var t="";switch(e){case"1":t="color_yellow";break;case"2":t="color_red";break;case"3":t="color_green"}return t},e.data1=[],e.load()}),angular.module("healthSuggestionController",[]).controller("healthSuggestionController",function(e,t){e.imageList={ystj:["ys_1","ys_2","ys_3"],ydtj:["yd_1","yd_3","yd_3"],cptj:["cp_1","cp_2","cp_3"],jytj:["jy_1","jy_2","jy_3"]},t.getUserHealthSuggestion().then(function(t){e.result=t.data[0]})}),angular.module("historyController",[]).controller("historyController",function(e,t){function a(e,t){$("#icon_"+e).hasClass("fa-chevron-circle-up")?(setTimeout(function(){$("#icon_"+e).removeClass().addClass("fa fa-chevron-circle-down")},300),$("#current_"+e).slideToggle()):(setTimeout(function(){$("#icon_"+e).removeClass().addClass("fa fa-chevron-circle-up")},300),$("#current_"+e).slideToggle())}e.history={show:a,result:o},t.getUserGoodsHistory().then(function(t){e.history.result=t.data});var o=[{hyk_no:"110359",hykname_cx:"普通卡",id:"82",jf:"45",mdid:"10",mdmc:"北京同仁堂施小墨医药有限公司",rq:"2009-09-01 00:00:00",spdm:"91300229",spmc:"酒萸肉(炙山茱萸)",xsje:"30",xssl:"300",zkje:"0",zkje_hy:"0"},{hyk_no:"110359",hykname_cx:"普通卡",id:"82",jf:"45",mdid:"10",mdmc:"北京同仁堂施小墨医药有限公司",rq:"2009-09-01 00:00:00",spdm:"91300229",spmc:"酒萸肉(炙山茱萸)",xsje:"30",xssl:"300",zkje:"0",zkje_hy:"0"}]}),angular.module("httpFactory",["constantModule"]).factory("httpFactory",function(e,t){function a(a,o,n){var l="";return l=t.isDev?t.dev+"getMDSCountList.json":t.pro+"getMDSCountList.do",e({method:"GET",url:l})}function o(){var a="";return a=t.isDev?t.dev+"tag.json":t.pro+"getAllMemberTagInfoList.do",e({method:"GET",url:a})}function n(){var a="";return a=t.isDev?t.dev+"userInfo.json":t.pro+"getAllMemberBaseInfoList.do",e({method:"GET",url:a})}function l(){var a="";return a=t.isDev?t.dev+"history.json":t.pro+"getAllMemberBaseInfoList.do",console.log(1,a),e({method:"GET",url:a})}function r(){var a="";return a=t.isDev?t.dev+"healthSuggestion.json":t.pro+"getAllHealthAdviceList.do",e({method:"GET",url:a})}t.url;return{getMDSCountList:a,getTagInfo:o,getUserInfo:n,getUserGoodsHistory:l,getUserHealthSuggestion:r}}),angular.module("overViewController",[]).controller("overViewController",function(e,t){e.isBeijingShow=!1,e.isShanghaiShow=!1,e.isZhengzhouShow=!1,e.isGuangzhouShow=!1;var a=echarts.init(document.getElementById("shell")),o=echarts.init(document.getElementById("devices")),n=echarts.init(document.getElementById("map")),l=echarts.init(document.getElementById("platform")),r=echarts.init(document.getElementById("pic")),i=echarts.init(document.getElementById("pie"));n.on("click",function(t){console.log(e.isShow),console.log(t.name),"北京"==t.name?(e.isBeijingShow=!0,e.isShanghaiShow=!1,e.isZhengzhouShow=!1,e.isGuangzhouShow=!1):"上海"==t.name?(e.isBeijingShow=!1,e.isShanghaiShow=!0,e.isZhengzhouShow=!1,e.isGuangzhouShow=!1):"郑州"==t.name?(e.isBeijingShow=!1,e.isShanghaiShow=!1,e.isZhengzhouShow=!0,e.isGuangzhouShow=!1):"广州"==t.name?(e.isBeijingShow=!1,e.isShanghaiShow=!1,e.isZhengzhouShow=!1,e.isGuangzhouShow=!0):(e.isBeijingShow=!1,e.isShanghaiShow=!1,e.isZhengzhouShow=!1,e.isGuangzhouShow=!1),e.$apply()});var s={normal:{label:{show:!0,position:"center",formatter:"{b}",textStyle:{baseline:"bottom"}},labelLine:{show:!1}}},u={normal:{label:{formatter:function(e){return 100-e.value+"%"},textStyle:{baseline:"top"}}}},c={normal:{color:"#ccc",label:{show:!0,position:"center"},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}},d=[55,65];option={animation:!1,backgroundColor:"#404a59",color:["#00fe00","#f5af15","#f5af15"],title:{text:"集群统计指标表",x:"center",textStyle:{color:"#ffffff"}},series:[{type:"pie",center:["15%","50%"],hoverAnimation:!1,radius:d,x:"0%",itemStyle:u,data:[{name:"other",value:66,itemStyle:c},{name:"cpu使用率",value:34,itemStyle:s}]},{type:"pie",hoverAnimation:!1,center:["30%","50%"],radius:d,x:"20%",itemStyle:u,data:[{name:"other",value:20,itemStyle:c},{name:"內存使用率",value:80,itemStyle:s}]},{type:"pie",hoverAnimation:!1,center:["45%","50%"],radius:d,x:"40%",itemStyle:u,data:[{name:"other",value:20,itemStyle:c},{name:"存储占用率",value:80,itemStyle:s}]}]},option2={backgroundColor:"#404a59",title:{left:"center",top:"2%",text:"流量数据统计",textStyle:{color:"#ffffff"}},tooltip:{trigger:"axis"},color:["#00fe00","#f5af15","#2d7dd9"],legend:{left:"65%",top:"5%",data:["浏览次数（pv）","门店销量（独立访客）","IP"],textStyle:{color:"#ffffff"}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["00:00","04:00","08:00","12:00","16:00","20:00"],axisLabel:{show:!0,textStyle:{color:"#999999"}}}],yAxis:[{min:0,max:1500,type:"value",axisLabel:{show:!0,textStyle:{color:"#999999"}}}],series:[{name:"浏览次数（pv）",type:"line",data:[500,800,750,1100,800,900]},{name:"门店销量（独立访客）",type:"line",data:[500,700,450,900,800,770]},{name:"IP",type:"line",data:[490,600,600,900,780,860]}]},option3={color:["#e7a617"],xAxis:{splitLine:{show:!1},axisLine:{show:!1},min:0,max:500,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{axisLine:{show:!1},splitNumber:0,axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["E店宝","SRM","CRM","POS","JDE"]},series:[{name:"2011年",type:"bar",data:[182,234,290,104,131]}]},option5={title:{left:"center",text:"总数：432,040,050",top:"8%",textStyle:{fontSize:15,color:"#ffffff"}},grid:{left:"3%",bottom:"10",containLabel:!0},color:["#e7a617"],xAxis:{show:!1,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{name:"设备Top5",nameTextStyle:{color:"#999999"},axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["天津","本市","华中区","华南区","华东区"]},series:[{label:{normal:{show:!0,textStyle:{fontSize:8,color:"#ffffff"},position:"right",formatter:function(e,t){return e.data}}},barMinHeight:.01,name:"2011年",type:"bar",data:[46200,41400,42e3,44400,43100]}]},option6={title:{left:"center",text:"总数：238,000,000",top:"8%",textStyle:{fontSize:15,color:"#ffffff"}},grid:{left:"3%",bottom:"10",containLabel:!0},color:["#e7a617"],xAxis:{show:!1,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{name:"销售top5",nameTextStyle:{color:"#999999"},axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["天津","本市","华中区","华南区","华东区"]},series:[{label:{normal:{show:!0,textStyle:{fontSize:8,color:"#ffffff"},position:"right",formatter:function(e,t){return"￥"+e.data}}},barMinHeight:.01,name:"2011年",type:"bar",data:[18200,21400,22e3,10400,13100]}]};var m=[{name:"北京",value:300},{name:"上海",value:280},{name:"广州",value:280},{name:"清远",value:39},{name:"中山",value:39},{name:"昆明",value:39},{name:"寿光",value:40},{name:"盘锦",value:40},{name:"长治",value:41},{name:"深圳",value:41},{name:"珠海",value:42},{name:"宿迁",value:43},{name:"咸阳",value:43},{name:"铜川",value:44},{name:"平度",value:44},{name:"佛山",value:44},{name:"马鞍山",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"句容",value:75},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84},{name:"杭州",value:84},{name:"淄博",value:85},{name:"鞍山",value:86},{name:"溧阳",value:86},{name:"库尔勒",value:86},{name:"安阳",value:90},{name:"开封",value:90},{name:"济南",value:92},{name:"德阳",value:93},{name:"温州",value:95},{name:"九江",value:96},{name:"邯郸",value:98},{name:"临安",value:99},{name:"兰州",value:99},{name:"沧州",value:100},{name:"临沂",value:103},{name:"南充",value:104},{name:"天津",value:105},{name:"富阳",value:106},{name:"泰安",value:112},{name:"诸暨",value:112},{name:"郑州",value:250},{name:"哈尔滨",value:114},{name:"聊城",value:116},{name:"芜湖",value:117},{name:"唐山",value:119},{name:"平顶山",value:119},{name:"邢台",value:119},{name:"德州",value:120}],h={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},f=function(e){for(var t=[],a=0;a<e.length;a++){var o=h[e[a].name];o&&t.push({name:e[a].name,value:o.concat(e[a].value)})}return t};option4={backgroundColor:"#404a59",title:{text:"同仁堂健康数据地图",subtext:"2017-05-19 11:32",left:"center",textStyle:{color:"#fff"}},grid:{left:"left",bottom:"10",containLabel:!0},geo:{layoutCenter:["40%","50%"],layoutSize:550,map:"china",roam:!1,label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[{type:"scatter",roam:!1,coordinateSystem:"geo",data:f(m),symbolSize:function(e){return e[2]/10},itemStyle:{normal:{color:"#ddb926"}}},{name:"Top 5",roam:!1,type:"effectScatter",coordinateSystem:"geo",data:f(m.sort(function(e,t){return t.value-e.value}).slice(0,6)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]},i.setOption(option),r.setOption(option2),l.setOption(option3),n.setOption(option4),o.setOption(option5),a.setOption(option6)}),angular.module("productInfoController",[]).controller("productInfoController",function(e,t){e.taglist=[],e.listLength=0,e.load=function(){t({method:"GET",url:"./data/itemDetails.json"}).then(function(t){angular.forEach(t.data.list,function(t){var a={};a.tag=t.tag,a.type=e.getColor(t.type),e.taglist.push(a)}),e.listLength=t.data.list.length,console.log(e.taglist)},function(e){})},e.getColor=function(e){var t="";switch(e){case 1:t="color_yellow";break;case 2:t="color_red";break;case 3:t="color_green"}return t},e.data1=[],e.load()}),angular.module("productSaleController",[]).controller("productSaleController",function(e,t){e.isShow=!1,e.area="店中店DZD1_北京1翠微大厦";e.onDateSpinnerClick=function(){e.isShow=!e.isShow},e.load=function(e,o,n){t.getMDSCountList(e,o,n).then(function(e){var t=[],o=[],n=[];for(var l in e.data){t.push(l);for(var r in e.data[l])o.push(r),n.push(e.data[l][r])}option.xAxis[0].data=t,option.series[0].data=o,option.series[1].data=n,a.setOption(option)})},e.onDateClick=function(t){switch(e.isShow=!1,t){case 0:e.area="店中店DZD1_北京1翠微大厦",e.load(1,13,1);break;case 1:e.area="店中店DZD1_北京1同仁堂远大路店",e.load(1,7,1);break;case 2:e.area="店中店DZD1_北京1同仁堂牡丹园店",e.load(1,203,1);break;case 3:e.area="店中店DZD1_北京1燕莎商城店",e.load(1,3,1);break;case 4:e.area="北京同仁堂施小墨医药有限公司",e.load(1,10,1)}},e.dateLists=[{date:"华东区",checked:!1},{date:"华南区",checked:!1},{date:"华中区",checked:!1},{date:"本市",checked:!0},{date:"天津",checked:!1}];var a=echarts.init(document.getElementById("pic"));option={title:{left:"center",top:"2%",text:"门店库存@销量信息",subtext:"Jan, 2017 - Jan, 2021"},tooltip:{trigger:"axis"},color:["#fecc7d","#2891f1","#f8c042"],legend:{left:"80%",top:"5%",data:["门店库存","门店销量"]},calculable:!0,xAxis:[{splitNumber:5,type:"category",boundaryGap:!1,data:["2016","2017","2018","2019","2020","2021","2022"]}],yAxis:[{min:0,max:2e3,type:"value"}],series:[{name:"门店库存",type:"line",areaStyle:{normal:{color:["rgba(254, 204, 125, 0.3)"]}},data:[0,700,450,1100,800,1300,200,900,700]},{name:"门店销量",type:"line",areaStyle:{normal:{color:["rgba(40, 145, 241, 0.3)"]}},data:[0,900,600,1400,750,900,600,1100,650]}]},a.setOption(option),e.load(1,13,1)}),angular.module("producViewController",[]).controller("producViewController",function(e,t){function a(){e.search.searchResult.length=0,e.search.content=" "}function o(){console.log("add"),e.search.searchResult.length=0,t(function(){n.forEach(function(t){e.search.searchResult.push(t)})},500)}var n=[{name:"枸杞子",no:"983612"},{name:"枸杞子",no:"983322"},{name:"枸杞子",no:"921232"},{name:"枸杞子",no:"9123612"}];e.search={searchResult:[],startSearch:o,remove:a}}),angular.module("recordController",[]).controller("recordController",function(e,t){function a(){t.go("consumer.userView.recordDetail.info")}e.record={list:[{date:"2017/05/16",name:"北京第一人民医院"},{date:"2017/05/13",name:"北京第一人民医院"},{date:"2017/05/11",name:"北京第一人民医院"},{date:"2017/05/09",name:"北京第一人民医院"},{date:"2017/05/04",name:"北京第一人民医院"},{date:"2017/04/16",name:"北京第一人民医院"},{date:"2017/04/12",name:"北京第一人民医院"},{date:"2017/04/1",name:"北京第一人民医院"},{date:"2017/03/23",name:"北京第一人民医院"},{date:"2017/03/12",name:"北京第一人民医院"},{date:"2017/02/16",name:"北京第一人民医院"},{date:"2017/01/12",name:"北京第一人民医院"}],showDetail:a,parentStatus:!0}}),angular.module("userSearchController",[]).controller("userSearchController",function(e,t){function a(){e.search.searchResult.length=0,e.search.content=" "}function o(){console.log("add"),e.search.searchResult.length=0,t(function(){n.forEach(function(t){e.search.searchResult.push(t)})},500)}var n=[{name:"同仁堂",no:"983612"},{name:"同仁堂",no:"983322"},{name:"同仁堂",no:"921232"},{name:"同仁堂",no:"9123612"}];e.search={searchResult:[],startSearch:o,remove:a}}),angular.module("userinfoController",[]).controller("userinfoController",function(e,t,a){e.userInfo={},a.getUserInfo().then(function(t){e.userInfo=t.data[0]})});