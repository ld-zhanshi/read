/* 
* @Author: Marte
* @Date:   2017-01-03 00:58:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 16:15:55
*/

var addfriendlis=[
    {
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI",
        vipflag:"true",
        iphone:"true",
        num:'092'
    },
    {
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI",
        vipflag:"false",
        iphone:"true",
        num:'092'
    },
    {
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI",
        vipflag:"true",
        iphone:"true",
        num:'092'
    },
    {
        title:"Aim",
        title1:"Green",
        mes:"撸啊撸啊德玛西亚",
        local:"TAIYUAN",
        local1:"SHANXI",
        vipflag:"true",
        iphone:"true",
        num:'092'
    }
]
var addfrienditem=angular.module("addfrienditem",[]);
addfrienditem.controller("addfriend",function($scope){
    $scope.addfriendlis=addfriendlis;
})
