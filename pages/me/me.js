// 沈阳 个人主页 目录列表
var sy_lists=[
     {
     	id:1,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_1.png",
     	title:"收藏书籍"
     },
     {
     	id:2,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"我的关注"
     },
     {
     	id:3,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"我的粉丝"
     },
     {
     	id:4,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"我的动态"
     },
     {
     	id:5,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"编辑设置"
     },
     {
     	id:6,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"个性装扮"
     },
     {
     	id:7,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"会员中心"
     },
     {
     	id:8,
     	background:"url()",
     	src:"../../images/sy_images/sy_mjh_2.png",
     	title:"消息通知"
     },
]
app.run(function($rootScope,$filter){
    $rootScope.sy_lists=sy_lists
})
var meitem=angular.module("meitem",[])
meitem.controller("me",function($scope){
    // $scope.sy_lists=sy_lists
})
meitem.directive('setwifi',function(){
     return {
          controller:function($scope){
               $scope.index=0
          },
          link:function(scope,element,attr){ 
            $(".sy_setrght_con").click(function(e){
               var mu=e.target;
               $(this).toggleClass("active").children().toggleClass("active")
            })
            $(".ld_huancun").click(function(){
                $(".yhp_cache_box").addClass('ld_catch_box')
            })
            $(".yhp_cache_box").click(function(){
                 $(".yhp_cache_box").removeClass('ld_catch_box')
            })
          }
     }
})