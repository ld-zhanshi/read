
/* 
* @Author: Marte
* @Date:   2016-12-30 10:26:56
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-31 02:24:09
*/

var sheququanzi=[
    {
        "bgurl":"images/ld_images/ld_sq_lis01.png",
        "photourl":"images/ld_images/ld_qz_photo.png",
        "name":"软萌萌",
        "love":"89",
        "title":"冬雪",
        "titleenglish":"the first snow",
        "comment":"秋雨不宜相见，冬雪不能饮醉，从春到冬，一直...",
        "city":"太原·小店区",
        "cityenglish":"taiyuan knick-knacks",
        "zannum":"234",
        "commentnum":"534"
    },
    {
        "bgurl":"images/ld_images/ld_sq_lis01.png",
        "photourl":"images/ld_images/ld_qz_photo.png",
        "name":"软萌萌",
        "love":"89",
        "title":"冬雪",
        "titleenglish":"the first snow",
        "comment":"秋雨不宜相见，冬雪不能饮醉，从春到冬，一直...",
        "city":"太原·小店区",
        "cityenglish":"taiyuan knick-knacks",
        "zannum":"234",
        "commentnum":"534"
    },
    {
        "bgurl":"images/ld_images/ld_sq_lis01.png",
        "photourl":"images/ld_images/ld_qz_photo.png",
        "name":"软萌萌",
        "love":"89",
        "title":"冬雪",
        "titleenglish":"the first snow",
        "comment":"秋雨不宜相见，冬雪不能饮醉，从春到冬，一直...",
        "city":"太原·小店区",
        "cityenglish":"taiyuan knick-knacks",
        "zannum":"234",
        "commentnum":"534"
    }
]
var shequtopbar=[
    {
        "personurl":"images/ld_images/ld_qz_photo.png",
        "left":"圈子",
        "right":"书友"
    }
]
var ctrl=angular.module('ctrl',['directive','shequitem']);
// 首页/书库
ctrl.controller('home',function($scope){
    
})
// 书架
ctrl.controller('shujia',function($scope){

})
// 社区
ctrl.controller('shequ',function($scope){
    $scope.sheququanzi=sheququanzi;
    $scope.topFlag=true;
    $scope.shequtopbar=shequtopbar;
    $scope.changeQuanzi=function(){
        $scope.topFlag=!$scope.topFlag;
    }
})
// 账户
ctrl.controller('zhanghu',function($scope){
    
})