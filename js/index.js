var js=angular.module('jianshu',["ngAnimate","ngRoute"]);

js.controller('mainCtrl',["$scope",function($scope){
	$scope.title="文章";
	if(localStorage.js){
		$scope.isFirstOpen = false;
	}else{
		$scope.isFirstOpen = true;
		
	}
	 $scope.enter = function(){
	    localStorage.js = true;
	    $scope.isFirstOpen = false;
  	}
  	$scope.allcate = [
    {name:'热门',href:'#/redian',state:true},
    {name:'新上榜',href:'#/xinshangban',state:false},
    {name:'日报',href:'#/ribao',state:false},
    {name:'七日热门',href:'#/qiriremen',state:false},
    {name:'三十日热门',href:'#/sanshiriremen',state:false},
    {name:'市集',href:'#/shiji',state:false},
    {name:'有奖活动',href:'#/youjianghuodong',state:false},
    {name:'简书出版',href:'#/jianshuchuban',state:false},
    {name:'简书播客',href:'#/jianshuboke',state:false},
  ]

  $scope.title="发现";
}])
js.controller('contentCtrl',["$scope",function($scope){}]);
js.controller('xinshangbanCtrl',["$scope",function($scope){}]);
js.controller('ribaoCtrl',["$scope",function($scope){}]);
js.controller('qiriremenCtrl',["$scope",function($scope){}]);
js.controller('sanshiriremenCtrl',["$scope",function($scope){}]);
js.controller('shijiCtrl',["$scope",function($scope){}]);
js.controller('youjianghuodongCtrl',["$scope",function($scope){}]);
js.controller('jianshuchubanCtrl',["$scope",function($scope){}]);
js.controller('jianshubokeCtrl',["$scope",function($scope){}]);
js.controller('guanzhuCtrl',["$scope",function($scope){}]);
js.controller('xiaoxiCtrl',["$scope",function($scope){
	$scope.xiaoxi=[
		{name:'评论',img:'image/xiaoxi/1.png'},
		{name:'简信',img:'image/xiaoxi/2.png'},
		{name:'投稿要求',img:'image/xiaoxi/3.png'},
		{name:'喜欢',img:'image/xiaoxi/4.png'},
		{name:'关注',img:'image/xiaoxi/5.png'},
		{name:'打赏',img:'image/xiaoxi/6.png'},
		{name:'其他',img:'image/xiaoxi/7.png'},
	]
}]);
js.controller('bianjiCtrl',["$scope",function($scope){}]);
js.controller('wodeCtrl',["$scope",function($scope){
	$scope.xiaoxi=[
		{name:'公开文章',img:'image/wode/1.png',shu:0},
		{name:'私密文章',img:'image/wode/2.png',shu:0},
		{name:'我的收藏',img:'image/wode/3.png',shu:0},
		{name:'喜欢的文章',img:'image/wode/4.png',shu:0},
		{name:'我的钱包',img:'image/wode/5.png',shu:0},
	]

}]);

js.directive("jsYindao",[function(){
	return{
		restrict:"EAC",
		replace:true,
		templateUrl:'view/directive/shanping.html',
		link:function($scope,em){
			$(function(){
				var mySwiper = new Swiper ('.swiper-container', {
					pagination: '.swiper-pagination',
				})
			})
		}
	}
}]).directive("jsTitle",[function(){
	return {
		replace:true,
		restrict:'EAC',
		templateUrl:'view/directive/title.html',
	}
}]).directive("jsTab",[function(){
	return {
		replace:true,
		restrict:'EAC',
		templateUrl:'view/directive/tab.html',
	}
}])
js.controller('redianCtrl',['$scope','$news',function($scope,$news){
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		loop:true,
		autoplay : 5000,
		speed:300
	})
	// var list=$news.getNewsByType('redian');
	// console.table(list)
}]);
js.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:'redianCtrl',
		templateUrl:'view/templates/redian.html',
	}).when('/redian',{
		controller:'redianCtrl',
		templateUrl:'view/templates/redian.html',
	}).when('/xinshangban',{
		controller:'xinshangbanCtrl',
		templateUrl:'view/templates/xinshangban.html',
	}).when('/ribao',{
		controller:'ribaoCtrl',
		templateUrl:'view/templates/ribao.html',
	}).when('/qiriremen',{
		controller:'qiriremenCtrl',
		templateUrl:'view/templates/qiriremen.html',
	}).when('/sanshiriremen',{
		controller:'sanshiriremenCtrl',
		templateUrl:'view/templates/sanshiriremen.html',
	}).when('/shiji',{
		controller:'shijiCtrl',
		templateUrl:'view/templates/shiji.html',
	}).when('/youjianghuodong',{
		controller:'youjianghuodongCtrl',
		templateUrl:'view/templates/youjianghuodong.html',
	}).when('/jianshuchuban',{
		controller:'jianshuchubanCtrl',
		templateUrl:'view/templates/jianshuchuban.html',
	}).when('/jianshuboke',{
		controller:'jianshubokeCtrl',
		templateUrl:'view/templates/jianshuboke.html',
	}).when('/content',{
		controller:'contentCtrl',
		templateUrl:'view/templates/content.html',
	}).when('/guanzhu',{
		controller:'guanzhuCtrl',
		templateUrl:'view/templates/guanzhu.html',
	}).when('/xiaoxi',{
		controller:'xiaoxiCtrl',
		templateUrl:'view/templates/xiaoxi.html',
	}).when('/bianji',{
		controller:'bianjiCtrl',
		templateUrl:'view/templates/bianji.html',
	}).when('/wode',{
		controller:'wodeCtrl',
		templateUrl:'view/templates/wode.html',
	}).otherwise({
		redirectTo:'/'
	})
}])
js.factory('$news',[function(){
    var news = [
        {
          id:1001,
          type:'redian',
          name:'顾一寰',
          time:'21小时前',
          title:'别再说舍不得放不下，你只是失恋了不甘心',
          xf:'想法',
          yue:'2608次阅',
          pinglun:'210评论',
          xihuan:'168喜欢',
          image:'image/list/1.png',
          img:'image/list/2.png'
        },
         {
          id:1002,
          type:'redian',
          name:'顾一寰',
          time:'21小时前',
          title:'别再说舍不得放不下，你只是失恋了不甘心',
          xf:'想法',
          yue:'2608次阅',
          pinglun:'210评论',
          xihuan:'168喜欢',
          image:'image/list/1.png',
          img:'image/list/2.png'
        },
        {
          id:1003,
          type:'redian',
          name:'顾一寰',
          time:'21小时前',
          title:'别再说舍不得放不下，你只是失恋了不甘心',
          xf:'想法',
          yue:'2608次阅',
          pinglun:'210评论',
          xihuan:'168喜欢',
          image:'image/list/1.png',
          img:'image/list/2.png'
        },
    ];
    return {
      getNewsByType:function(type){
          var r = news.filter(function(v,i){
            return  v.type === type;
          })
          return r;
      }
    }
}]);