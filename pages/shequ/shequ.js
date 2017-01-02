/* 
* @Author: Marte
* @Date:   2016-12-29 09:23:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-02 15:33:08
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
var shequadd=[
    {
        photo:"images/ld_images/ld_photo01.png",
        title:"新增好友",
        mes:"查看我的新增好友信息",
        myhref:"http://localhost/angular_app/read/index.html#/shequ",
        flag:"true"
    },
    {
        photo:"images/ld_images/ld_photo01.png",
        title:"新增好友",
        mes:"查看我的新增好友信息",
        myhref:"http://localhost/angular_app/read/index.html#/shequ",
        flag:"false"
    },
    {
        photo:"images/ld_images/ld_photo01.png",
        title:"新增好友",
        mes:"查看我的新增好友信息",
        myhref:"http://localhost/angular_app/read/index.html#/shequ",
        flag:"false"
    }
]
var shequfriend=[
    {
        type:"A",
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI"
    },
    {
        type:"A",
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI"
    }
]
// 社区
var shequitem=angular.module('shequitem',[]);
shequitem.controller('shequ',function($scope){
    $scope.sheququanzi=sheququanzi;
    $scope.shequadd=shequadd;
    $scope.shequfriend=shequfriend;
    // 社区圈子顶部bar
    $scope.topFlag=true;
    $scope.changeQuanzi=function(f){
        $scope.topFlag=f;
        console.log($scope.topFlag)
    }
})