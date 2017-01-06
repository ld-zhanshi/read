/* 
* @Author: Marte
* @Date:   2016-12-30 10:26:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-06 14:05:30
*/

// 创建ng主模块ng-app入口模块
var app=angular.module('app',['ngRoute','dir','shequitem','shujiaitem','homeitem','bookcoveritem','showitem','frienditem','meitem','friendqunitem','addfrienditem','specialitem','fil','searchitem','commentitem','rechargeitem','yhp_permessitem','yhp_memberitem','muluitem','shuqianitem','chatitem'])
app.config(['$routeProvider',function($r){
    $r.when('/',{
        templateUrl:'pages/home/home.html',
        controller:'home'
    }).when('/shujia/:id',{
        templateUrl:'pages/shujia/shujia.html',
        controller:'shujia'
    }).when('/shequ/:id',{
        templateUrl:'pages/shequ/shequ.html',
        controller:'shequ'
    }).when('/zhanghu',{
        templateUrl:'pages/zhanghu/zhanghu.html',
        controller:'zhanghu'
    }).when('/bookcover',{
        templateUrl:'pages/bookcover/bookcover.html',
        controller:'bookcover'
    }).when('/show',{
        templateUrl:'pages/show/show.html',
        controller:'show'
    }).when('/friend',{
        templateUrl:'pages/friend/friend.html',
        controller:'friend'
    }).when('/me/:id',{
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
    }).when('/search',{
        templateUrl:'pages/search/search.html',
        controller:'search'
    }).when('/comment',{
        templateUrl:'pages/comment/comment.html',
        controller:'comment'
    }).when('/recharge',{
        templateUrl:'pages/me/recharge/recharge.html',
        controller:'recharge'
    }).when('/yhp_permess',{
        templateUrl:'pages/me/yhp_permess/yhp_permess.html',
        controller:'yhp_permess'
    }).when('/yhp_member',{
        templateUrl:'pages/me/yhp_member/yhp_member.html',
        controller:'yhp_member'
    }).when('/mulu',{
        templateUrl:'pages/show/mulu/mulu.html',
        controller:'mulu'
    }).when('/shuqian',{
        templateUrl:'pages/show/mulu/shuqian.html',
        controller:'shuqian'
    }).when('/chat',{
        templateUrl:'pages/chat/chat.html',
        controller:'chat'
    })
}])