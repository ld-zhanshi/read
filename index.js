/* 
* @Author: Marte
* @Date:   2016-12-30 10:26:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 23:40:53
*/

// 创建ng主模块ng-app入口模块
var app=angular.module('app',['ngRoute','dir','shequitem','shujiaitem','homeitem','zhanghuitem','bookcoveritem','showitem','frienditem','meitem','friendqunitem','addfrienditem','specialitem'])
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
    }).when('/bookcover',{
        templateUrl:'pages/bookcover/bookcover.html',
        controller:'bookcover'
    }).when('/show',{
        templateUrl:'pages/show/lrc-xqy.html',
        controller:'show'
    }).when('/friend',{
        templateUrl:'pages/friend/friend.html',
        controller:'friend'
    }).when('/me',{
        templateUrl:'pages/me/me.html',
        controller:'me'
    }).when('/friendqun',{
        templateUrl:'pages/friendqun/friendqun.html',
        controller:'friendqun'
    }).when('/addfriend',{
        templateUrl:'pages/addfriend/addfriend.html',
        controller:'addfriend'
    }).when('/special',{
        templateUrl:'pages/special/special.html',
        controller:'special'
    })
}])