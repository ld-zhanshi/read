/* 
* @Author: Marte
* @Date:   2017-01-03 00:58:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 14:59:49
*/

var speciallis=[
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
var specialitem=angular.module("specialitem",[]);

app.run(function($rootScope){
    $rootScope.speciallis=speciallis;
})

specialitem.controller("special",function($scope){
    // $scope.speciallis=speciallis;
})
