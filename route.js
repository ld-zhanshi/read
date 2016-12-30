/* 
* @Author: Marte
* @Date:   2016-12-30 10:26:56
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-30 15:55:38
*/

var data=[
    {
        "id":1,
        "title":"老干部喝茶专用盖碗，可是很讲究的",
        "time":"2016-12-2",
        "content":"要不怎么说",
        "url":"#/show/1"
    },
    {
        "id":2,
        "title":"老干部喝茶专用盖碗，可是很讲究的",
        "time":"2016-12-2",
        "content":"要不怎么说",
        "url":"#/show/2"
    },
    {
        "id":3,
        "title":"老干部喝茶专用盖碗，可是很讲究的",
        "time":"2016-12-2",
        "content":"要不怎么说",
        "url":"#/show/3"
    }
]
var ctrl=angular.module('ctrl',[]);
// 首页/书库
ctrl.controller('home',function($scope){
    $scope.data=data;
})
// 书架
ctrl.controller('shujia',function($scope){

})
// 社区
ctrl.controller('shequ',function($scope){
    $scope.topFlag=false;
    $scope.changeQuanzi=function(){
        $scope.topFlag=!$scope.topFlag;
    }
    $scope.changeShuyou=function(){
        $scope.topFlag=!$scope.topFlag;
    }
})
// 账户
ctrl.controller('zhanghu',function($scope){
    $scope.data=data;
})