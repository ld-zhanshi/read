/* 
* @Author: Marte
* @Date:   2016-12-30 16:42:17
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-31 22:32:08
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
})