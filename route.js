/* 
* @Author: Marte
* @Date:   2016-12-30 10:26:56
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-31 01:16:34
*/

// 创建ng主模块ng-app入口模块
var app=angular.module('app',['ctrl','ngRoute'])
app.config(['$routeProvider',function($r){
    $r.when('/',{
        templateUrl:'pages/home/home.html',
        controller:'home'
    }).when('/shujia',{
        templateUrl:'pages/shujia/shujia.html',
        controller:'shujia'
    }).when('/shequ',{
        templateUrl:'pages/shequ/shequ.html',
        controller:'shequ'
    }).when('/zhanghu',{
        templateUrl:'pages/zhanghu/zhanghu.html',
        controller:'zhanghu'
    })
}])