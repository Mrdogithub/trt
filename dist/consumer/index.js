angular.module("dataDashboardController",[]).controller("dataDashboardController",function(a){a.load=function(){function e(){0==a.count?(console.log("0"),a.data=a.data1,a.count++):1==a.count?(console.log("1"),a.data=a.data2,a.count++):2==a.count&&(console.log("2"),a.data=a.data3,a.count=0),a.myDate=new Date,a.$apply()}a.myVar=window.setInterval(e,5e3),a.count=0},a.myDate=new Date,a.data1={},a.data1.rate="150",a.data1.rateUnit="Bpm",a.data1.capacity="3347",a.data1.capacityUnit="ml",a.data1.age="39",a.data1.ageUnit="岁",a.data1.airflow="10",a.data1.airflowUnit="s",a.data1.tmp="37.3",a.data1.tmpUnit="℃",a.data1.sleep="8.0",a.data1.sleepUnit="h/d",a.data1.sugar="5",a.data1.sugarUnit="mmol/L",a.data1.oxygen="92",a.data1.oxygenUnit="%",a.data1.pressure="100/90",a.data1.pressureUnit="mmHg",a.data1.pulse="120",a.data1.pulseUnit="Bpm",a.data1.weight="70",a.data1.weightUnit="kg",a.data1.Muscle="35",a.data1.MuscleUnit="%",a.data1.fat="25",a.data1.fatUnit="%",a.data1.metabolism="1200",a.data1.metabolismUnit="Kcal/d",a.data1.steps="12500",a.data1.stepsUnit="步",a.data1.hot="300",a.data1.hotUnit="Kcal",a.data1.rate1="250",a.data1.rate2="250",a.data1.rate3="20℃",a.data1.rate4="100%",a.data2={},a.data2.rate="110",a.data2.rateUnit="Bpm",a.data2.capacity="3200",a.data2.capacityUnit="ml",a.data2.age="39",a.data2.ageUnit="岁",a.data2.airflow="10",a.data2.airflowUnit="s",a.data2.tmp="37.5",a.data2.tmpUnit="℃",a.data2.sleep="9.0",a.data2.sleepUnit="h/d",a.data2.sugar="6",a.data2.sugarUnit="mmol/L",a.data2.oxygen="97",a.data2.oxygenUnit="%",a.data2.pressure="110/89",a.data2.pressureUnit="mmHg",a.data2.pulse="130",a.data2.pulseUnit="Bpm",a.data2.weight="60",a.data2.weightUnit="kg",a.data2.Muscle="37",a.data2.MuscleUnit="%",a.data2.fat="15",a.data2.fatUnit="%",a.data2.metabolism="1290",a.data2.metabolismUnit="Kcal/d",a.data2.steps="17500",a.data2.stepsUnit="步",a.data2.hot="400",a.data2.hotUnit="Kcal",a.data2.rate1="250",a.data2.rate2="250",a.data2.rate3="20℃",a.data2.rate4="100%",a.data3={},a.data3.rate="150",a.data3.rateUnit="Bpm",a.data3.capacity="2847",a.data3.capacityUnit="ml",a.data3.age="39",a.data3.ageUnit="岁",a.data3.airflow="10",a.data3.airflowUnit="s",a.data3.tmp="38.3",a.data3.tmpUnit="℃",a.data3.sleep="8.0",a.data3.sleepUnit="h/d",a.data3.sugar="9",a.data3.sugarUnit="mmol/L",a.data3.oxygen="90",a.data3.oxygenUnit="%",a.data3.pressure="100/90",a.data3.pressureUnit="mmHg",a.data3.pulse="120",a.data3.pulseUnit="Bpm",a.data3.weight="79",a.data3.weightUnit="kg",a.data3.Muscle="35",a.data3.MuscleUnit="%",a.data3.fat="25",a.data3.fatUnit="%",a.data3.metabolism="900",a.data3.metabolismUnit="Kcal/d",a.data3.steps="9000",a.data3.stepsUnit="步",a.data3.hot="100",a.data3.hotUnit="Kcal",a.data3.rate1="250",a.data3.rate2="250",a.data3.rate3="20℃",a.data3.rate4="100%",a.data=a.data1,a.load()}),angular.module("featureController",[]).controller("featureController",function(a,e){a.taglist=[],a.listLength=0,a.load=function(){e({method:"GET",url:"./data/tag.json"}).then(function(e){console.log(1,e),angular.forEach(e.data.list,function(e){var t={};t.tag=e.tag,t.type=a.getColor(e.type),a.taglist.push(t)}),a.listLength=e.data.list.length,console.log(a.taglist)},function(a){})},a.getColor=function(a){var e="";switch(a){case 1:e="color_yellow";break;case 2:e="color_red";break;case 3:e="color_green"}return e},a.data1=[],a.load()}),angular.module("historyController",[]).controller("historyController",function(a,e){function t(a,e){$("#icon_"+a).hasClass("fa-chevron-circle-up")?(setTimeout(function(){$("#icon_"+a).removeClass().addClass("fa fa-chevron-circle-down")},300),$("#current_"+a).slideToggle()):(setTimeout(function(){$("#icon_"+a).removeClass().addClass("fa fa-chevron-circle-up")},300),$("#current_"+a).slideToggle())}a.history={show:t,result:o},e.getUserGoodsHistory().then(function(e){a.history.result=e.data});var o=[{hyk_no:"110359",hykname_cx:"普通卡",id:"82",jf:"45",mdid:"10",mdmc:"北京同仁堂施小墨医药有限公司",rq:"2009-09-01 00:00:00",spdm:"91300229",spmc:"酒萸肉(炙山茱萸)",xsje:"30",xssl:"300",zkje:"0",zkje_hy:"0"},{hyk_no:"110359",hykname_cx:"普通卡",id:"82",jf:"45",mdid:"10",mdmc:"北京同仁堂施小墨医药有限公司",rq:"2009-09-01 00:00:00",spdm:"91300229",spmc:"酒萸肉(炙山茱萸)",xsje:"30",xssl:"300",zkje:"0",zkje_hy:"0"}]}),angular.module("httpFactory",["constantModule"]).factory("httpFactory",function(a,e){function t(){var t="";return t=e.isDev?e.dev+"userInfo.json":e.pro+"getAllMemberBaseInfoList.do",a({method:"GET",url:t})}function o(){var t="";return t=e.isDev?e.dev+"history.json":e.pro+"getAllMemberBaseInfoList.do",console.log(1,t),a({method:"GET",url:t})}function n(){}e.url;return{getUserInfo:t,getUserGoodsHistory:o,getUserHealthSuggestion:n}}),angular.module("overViewController",[]).controller("overViewController",function(a,e){a.isBeijingShow=!1,a.isShanghaiShow=!1,a.isZhengzhouShow=!1,a.isGuangzhouShow=!1;var t=echarts.init(document.getElementById("shell")),o=echarts.init(document.getElementById("devices")),n=echarts.init(document.getElementById("map")),l=echarts.init(document.getElementById("platform")),r=echarts.init(document.getElementById("pic")),i=echarts.init(document.getElementById("pie"));n.on("click",function(e){console.log(a.isShow),console.log(e.name),"北京"==e.name?(a.isBeijingShow=!0,a.isShanghaiShow=!1,a.isZhengzhouShow=!1,a.isGuangzhouShow=!1):"上海"==e.name?(a.isBeijingShow=!1,a.isShanghaiShow=!0,a.isZhengzhouShow=!1,a.isGuangzhouShow=!1):"郑州"==e.name?(a.isBeijingShow=!1,a.isShanghaiShow=!1,a.isZhengzhouShow=!0,a.isGuangzhouShow=!1):"广州"==e.name?(a.isBeijingShow=!1,a.isShanghaiShow=!1,a.isZhengzhouShow=!1,a.isGuangzhouShow=!0):(a.isBeijingShow=!1,a.isShanghaiShow=!1,a.isZhengzhouShow=!1,a.isGuangzhouShow=!1),a.$apply()});var s={normal:{label:{show:!0,position:"center",formatter:"{b}",textStyle:{baseline:"bottom"}},labelLine:{show:!1}}},d={normal:{label:{formatter:function(a){return 100-a.value+"%"},textStyle:{baseline:"top"}}}},c={normal:{color:"#ccc",label:{show:!0,position:"center"},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}},u=[55,65];option={animation:!1,backgroundColor:"#404a59",color:["#00fe00","#f5af15","#f5af15"],title:{text:"集群统计指标表",x:"center",textStyle:{color:"#ffffff"}},series:[{type:"pie",center:["15%","50%"],hoverAnimation:!1,radius:u,x:"0%",itemStyle:d,data:[{name:"other",value:66,itemStyle:c},{name:"cpu使用率",value:34,itemStyle:s}]},{type:"pie",hoverAnimation:!1,center:["30%","50%"],radius:u,x:"20%",itemStyle:d,data:[{name:"other",value:20,itemStyle:c},{name:"內存使用率",value:80,itemStyle:s}]},{type:"pie",hoverAnimation:!1,center:["45%","50%"],radius:u,x:"40%",itemStyle:d,data:[{name:"other",value:20,itemStyle:c},{name:"存储占用率",value:80,itemStyle:s}]}]},option2={backgroundColor:"#404a59",title:{left:"center",top:"2%",text:"流量数据统计",textStyle:{color:"#ffffff"}},tooltip:{trigger:"axis"},color:["#00fe00","#f5af15","#2d7dd9"],legend:{left:"65%",top:"5%",data:["浏览次数（pv）","门店销量（独立访客）","IP"],textStyle:{color:"#ffffff"}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["00:00","04:00","08:00","12:00","16:00","20:00"],axisLabel:{show:!0,textStyle:{color:"#999999"}}}],yAxis:[{min:0,max:1500,type:"value",axisLabel:{show:!0,textStyle:{color:"#999999"}}}],series:[{name:"浏览次数（pv）",type:"line",data:[500,800,750,1100,800,900]},{name:"门店销量（独立访客）",type:"line",data:[500,700,450,900,800,770]},{name:"IP",type:"line",data:[490,600,600,900,780,860]}]},option3={color:["#e7a617"],xAxis:{splitLine:{show:!1},axisLine:{show:!1},min:0,max:500,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{axisLine:{show:!1},splitNumber:0,axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["ICloud","ITSM","CMDB","POS","JDE"]},series:[{name:"2011年",type:"bar",data:[182,234,290,104,131]}]},option5={title:{left:"center",text:"总数：432,040,050",top:"8%",textStyle:{fontSize:15,color:"#ffffff"}},grid:{left:"3%",bottom:"10",containLabel:!0},color:["#e7a617"],xAxis:{show:!1,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{name:"设备Top5",nameTextStyle:{color:"#999999"},axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["天津","本市","华中区","华南区","华东区"]},series:[{label:{normal:{show:!0,textStyle:{fontSize:8,color:"#ffffff"},position:"right",formatter:function(a,e){return a.data}}},barMinHeight:.01,name:"2011年",type:"bar",data:[46200,41400,42e3,44400,43100]}]},option6={title:{left:"center",text:"总数：238,000,000",top:"8%",textStyle:{fontSize:15,color:"#ffffff"}},grid:{left:"3%",bottom:"10",containLabel:!0},color:["#e7a617"],xAxis:{show:!1,position:"top",type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},boundaryGap:[0,.01]},yAxis:{name:"销售top5",nameTextStyle:{color:"#999999"},axisLabel:{show:!0,textStyle:{color:"#ffffff"}},type:"category",data:["天津","本市","华中区","华南区","华东区"]},series:[{label:{normal:{show:!0,textStyle:{fontSize:8,color:"#ffffff"},position:"right",formatter:function(a,e){return"￥"+a.data}}},barMinHeight:.01,name:"2011年",type:"bar",data:[18200,21400,22e3,10400,13100]}]};var m=[{name:"北京",value:300},{name:"上海",value:280},{name:"广州",value:280},{name:"清远",value:39},{name:"中山",value:39},{name:"昆明",value:39},{name:"寿光",value:40},{name:"盘锦",value:40},{name:"长治",value:41},{name:"深圳",value:41},{name:"珠海",value:42},{name:"宿迁",value:43},{name:"咸阳",value:43},{name:"铜川",value:44},{name:"平度",value:44},{name:"佛山",value:44},{name:"马鞍山",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"句容",value:75},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84},{name:"杭州",value:84},{name:"淄博",value:85},{name:"鞍山",value:86},{name:"溧阳",value:86},{name:"库尔勒",value:86},{name:"安阳",value:90},{name:"开封",value:90},{name:"济南",value:92},{name:"德阳",value:93},{name:"温州",value:95},{name:"九江",value:96},{name:"邯郸",value:98},{name:"临安",value:99},{name:"兰州",value:99},{name:"沧州",value:100},{name:"临沂",value:103},{name:"南充",value:104},{name:"天津",value:105},{name:"富阳",value:106},{name:"泰安",value:112},{name:"诸暨",value:112},{name:"郑州",value:250},{name:"哈尔滨",value:114},{name:"聊城",value:116},{name:"芜湖",value:117},{name:"唐山",value:119},{name:"平顶山",value:119},{name:"邢台",value:119},{name:"德州",value:120}],f={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},h=function(a){for(var e=[],t=0;t<a.length;t++){var o=f[a[t].name];o&&e.push({name:a[t].name,value:o.concat(a[t].value)})}return e};option4={backgroundColor:"#404a59",title:{text:"同仁堂健康数据地图",subtext:"2017-05-19 11:32",left:"center",textStyle:{color:"#fff"}},grid:{left:"left",bottom:"10",containLabel:!0},geo:{layoutCenter:["40%","50%"],layoutSize:550,map:"china",roam:!1,label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[{type:"scatter",roam:!1,coordinateSystem:"geo",data:h(m),symbolSize:function(a){return a[2]/10},itemStyle:{normal:{color:"#ddb926"}}},{name:"Top 5",roam:!1,type:"effectScatter",coordinateSystem:"geo",data:h(m.sort(function(a,e){return e.value-a.value}).slice(0,6)),symbolSize:function(a){return a[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]},i.setOption(option),r.setOption(option2),l.setOption(option3),n.setOption(option4),o.setOption(option5),t.setOption(option6)}),angular.module("productInfoController",[]).controller("productInfoController",function(a,e){a.taglist=[],a.listLength=0,a.load=function(){e({method:"GET",url:"./data/itemDetails.json"}).then(function(e){angular.forEach(e.data.list,function(e){var t={};t.tag=e.tag,t.type=a.getColor(e.type),a.taglist.push(t)}),a.listLength=e.data.list.length,console.log(a.taglist)},function(a){})},a.getColor=function(a){var e="";switch(a){case 1:e="color_yellow";break;case 2:e="color_red";break;case 3:e="color_green"}return e},a.data1=[],a.load()}),angular.module("productSaleController",[]).controller("productSaleController",function(a,e){a.isShow=!1,a.area="华东区";var t=[0,700,450,1100,800,1300,200,900,700],o=[1100,1300,1600,1600,1700,1200,1300],n=[1e3,1200,1100,1300,1100,1700,1200,1300],l=[1e3,1200,1100,1300,1100,1300,200,900,700],r=[1e3,1200,1100,1300,1100,450,1100,800],i=[0,900,600,1400,750,900,600,1100,650],s=[1e3,1100,1100,1700,1600,400,750,900,600],d=[1100,800,1100,1400,1600,1100,1300,1100],c=[1100,800,1100,1400,1600,1600,1700,1200],u=[1100,800,1100,1400,1600,1100,1300,200];a.onDateSpinnerClick=function(){a.isShow=!a.isShow},a.onDateClick=function(e){switch(a.isShow=!1,e){case 0:a.area="华东区",option.series[0].data=t,option.series[1].data=i;break;case 1:a.area="华南区",option.series[0].data=o,option.series[1].data=s;break;case 2:a.area="华中区",option.series[0].data=n,option.series[1].data=d;break;case 3:a.area="本市",option.series[0].data=l,option.series[1].data=c;break;case 4:a.area="天津",option.series[0].data=r,option.series[1].data=u}m.setOption(option)},a.dateLists=[{date:"华东区",checked:!1},{date:"华南区",checked:!1},{date:"华中区",checked:!1},{date:"本市",checked:!0},{date:"天津",checked:!1}];var m=echarts.init(document.getElementById("pic"));option={title:{left:"center",top:"2%",text:"门店库存@销量信息",subtext:"Jan, 2017 - Jan, 2021"},tooltip:{trigger:"axis"},color:["#fecc7d","#2891f1","#f8c042"],legend:{left:"80%",top:"5%",data:["门店库存","门店销量"]},calculable:!0,xAxis:[{min:"2016",max:"2022",splitNumber:5,type:"category",boundaryGap:!1,data:["2016","2017","2018","2019","2020","2021","2022"]}],yAxis:[{min:0,max:2e3,type:"value"}],series:[{name:"门店库存",type:"line",areaStyle:{normal:{color:["rgba(254, 204, 125, 0.3)"]}},data:[0,700,450,1100,800,1300,200,900,700]},{name:"门店销量",type:"line",areaStyle:{normal:{color:["rgba(40, 145, 241, 0.3)"]}},data:[0,900,600,1400,750,900,600,1100,650]}]},m.setOption(option)}),angular.module("producViewController",[]).controller("producViewController",function(a,e){function t(){a.search.searchResult.length=0,a.search.content=" "}function o(){console.log("add"),a.search.searchResult.length=0,e(function(){n.forEach(function(e){a.search.searchResult.push(e)})},500)}var n=[{name:"枸杞子",no:"983612"},{name:"枸杞子",no:"983322"},{name:"枸杞子",no:"921232"},{name:"枸杞子",no:"9123612"}];a.search={searchResult:[],startSearch:o,remove:t}}),angular.module("userSearchController",[]).controller("userSearchController",function(a,e){function t(){a.search.searchResult.length=0,a.search.content=" "}function o(){console.log("add"),a.search.searchResult.length=0,e(function(){n.forEach(function(e){a.search.searchResult.push(e)})},500)}var n=[{name:"同仁堂",no:"983612"},{name:"同仁堂",no:"983322"},{name:"同仁堂",no:"921232"},{name:"同仁堂",no:"9123612"}];a.search={searchResult:[],startSearch:o,remove:t}}),angular.module("userinfoController",[]).controller("userinfoController",function(a,e,t){a.userInfo={},t.getUserInfo().then(function(e){a.userInfo=e.data[0]})});