/* 
* @Author: Marte
* @Date:   2016-12-30 14:15:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 19:33:05
*/
var shujiafind=[
    {
        bg:"images/zlf_images/zlf_xzwz3.jpg",
        photo:"images/zlf_images/zlf_book.png",
        name:"郭敬明",
        fire:"388",
        time:"2005.02.01",
        title1:"夏至",
        title2:"未至",
        contain:"《夏至未至》是郭敬明开创“青春文学王国”的权威作品之一，也是郭敬明第一次采用第三人称多角度叙述，多线多面展开整个丰富鲜活的故事...",
        location:"中国",
        love1:"images/mjh/sy-mjh_54.png",
        love2:"images/mjh/sy-mjh_73.png",
        sum:"+46"
    },
    {
        bg:"images/zlf_images/zlf_book.png",
        photo:"images/zlf_images/zlf_book.png",
        name:"JimGreen",
        fire:"388",
        time:"2016.01.23",
        title1:"GENTL",
        title2:"YTOUCH",
        contain:"卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解放路看房卡大富科技...",
        location:"美国·纽约",
        love1:"images/mjh/sy-mjh_54.png",
        love2:"images/mjh/sy-mjh_73.png",
        sum:"+46"
    },
    {
        bg:"images/zlf_images/zlf_book.png",
        photo:"images/zlf_images/zlf_book.png",
        name:"JimGreen",
        fire:"388",
        time:"2016.08.22",
        title1:"GENTL",
        title2:"YTOUCH",
        contain:"卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解放路看房卡大富科技...",
        location:"美国·纽约",
        love1:"images/mjh/sy-mjh_54.png",
        love2:"images/mjh/sy-mjh_73.png",
        sum:"+46"
    }
]
var shujiashoucang=[
    {
        id:'1', 
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_dmbj.jpg",
        name:"盗墓笔记",
        nameenglish:"THE LOST TOMB",
        author:"南派三叔",
        look:"92",
        fire:"98"
    },
    {
        id:'2',
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_xzwz.jpg",
        name:"夏至未至",
        nameenglish:"RUSH TO THE DEAD SUMMER",
        author:"郭敬明",
        look:"32",
        fire:"98"
    },
    {
        id:'3',
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_hc.jpg",
        name:"幻城",
        nameenglish:"ICE FANTASY",
        author:"郭敬明",
        look:"32",
        fire:"98"
    }
]
// 书架
var shujiaitem=angular.module('shujiaitem',[]);
shujiaitem.controller('shujia',function($scope){
    $scope.shujiafind=shujiafind;
    $scope.shujiashoucang=shujiashoucang;
})