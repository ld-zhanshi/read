/* 
* @Author: Marte
* @Date:   2017-01-03 00:58:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 01:09:19
*/

var friendqunlis=[
    {
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI",
        vipflag:"true",
        iphone:"true"
    }
]
var friendqunitem=angular.module("friendqunitem",[]);
friendqunitem.controller("friendqun",function($scope){
    $scope.friendqunlis=friendqunlis;
})
