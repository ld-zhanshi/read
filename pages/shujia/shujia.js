/* 
* @Author: Marte
* @Date:   2016-12-30 14:15:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-02 23:58:31
*/
var shujiafind=[
    {
        bg:"images/zlf_images/zlf_book.png",
        photo:"images/zlf_images/zlf_book.png",
        name:"JimGreen",
        fire:"388",
        time:"2016",
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
        time:"2016",
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
        time:"2016",
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
        fengmian:"images/mjh/sy-mjh_27.png",
        name:"基督山伯爵",
        nameenglish:"THE COUNT OF MONTE CRISTO",
        author:"DUMAS",
        look:"32",
        fire:"98"
    },
    {
        id:'2',
        url:"#/bookcover",
        fengmian:"images/mjh/sy-mjh_27.png",
        name:"基督山伯爵",
        nameenglish:"THE COUNT OF MONTE CRISTO",
        author:"DUMAS",
        look:"32",
        fire:"98"
    },
    {
        id:'3',
        url:"#/bookcover",
        fengmian:"images/mjh/sy-mjh_27.png",
        name:"基督山伯爵",
        nameenglish:"THE COUNT OF MONTE CRISTO",
        author:"DUMAS",
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