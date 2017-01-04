/* 
* @Author: Marte
* @Date:   2017-01-04 16:37:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 17:18:05
*/

var commentquanzi=[
    {
        "bgurl":"images/ld_images/ld_sq_lis01.png",
        "photourl":"images/ld_images/ld_qz_photo.png",
        "name":"软萌萌",
        "love":"89",
        "title":"冬雪",
        "titleenglish":"the first snow",
        "comment":"秋雨不宜相见，冬雪不能饮醉，从春到夏，一直...",
        "city":"太原·小店区",
        "cityenglish":"taiyuan knick-knacks",
        "zannum":"234",
        "commentnum":"534"
    }
]
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
var commentitem=angular.module('commentitem',[]);

app.run(function($rootScope){
    $rootScope.commentquanzi=commentquanzi;
})

commentitem.controller('comment',function($scope){
    
})