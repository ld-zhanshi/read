/* 
* @Author: Marte
* @Date:   2016-12-30 16:42:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-02 16:42:31
*/
var dir=angular.module('dir',[]);
// 社区圈子顶部bar
dir.directive('shequtopbar',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequtopbar.html',
        scope: {
            personurl:"@personurl",
            left:"@left",
            right:"@right"
        }
    }
}),
// 社区新增书友
dir.directive('shequadd',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequadd.html'
    }
}),
// 社区下面好友列表
dir.directive('shequletter',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequletter.html'
    }
}),
// 社区下面好友列表
dir.directive('shequfriend',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequfriend.html'
    }
}),
// 首页标题
dir.directive('indextitle',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indextitle.html',
        scope: {
            titleenglish:"@titleenglish",
            icon:"@icon",
            title:"@title",
            myhref:"@myhref"
        }
    }
}),
// 书架收藏 书
dir.directive('shujiabook',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shujiabook.html'
    }
})