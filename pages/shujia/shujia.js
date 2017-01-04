/* 
* @Author: Marte
* @Date:   2016-12-30 14:15:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 12:44:35
*/
var shujiafind=[
    {   
        id:"1",
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
        id:"2",
        bg:"images/zlf_images/zlf_book.png",
        photo:"images/zlf_images/zlf_book.png",
        name:"JimGreen",
        fire:"388",
        time:"2016.01.23",
        title1:"GENTL",
        title2:"YTOUCH",
        contain:"卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解放路看房卡大富科技卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解...",
        location:"美国·纽约",
        love1:"images/mjh/sy-mjh_54.png",
        love2:"images/mjh/sy-mjh_73.png",
        sum:"+46"
    },
    {
        id:"3",
        bg:"images/zlf_images/zlf_book.png",
        photo:"images/zlf_images/zlf_book.png",
        name:"JimGreen",
        fire:"388",
        time:"2016.08.22",
        title1:"GENTL",
        title2:"YTOUCH",
        contain:"卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解放路看房卡大富科技卡就废了大家佛奥及覅偶将诶欧方佳偶的假发讲课了解...",
        location:"美国·纽约",
        love1:"images/mjh/sy-mjh_54.png",
        love2:"images/mjh/sy-mjh_73.png",
        sum:"+46"
    },
    {
        id:"4",
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
        done:'[已完结...]',
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
        done:'[已完结...]',
        look:"32",
        fire:"98"
    },
    {   
        id:'3', 
        url:"#/bookcover",
        fengmian:'https://img3.km.com/bookimg/public/uploads/cover/thumb2/20151127115509.jpg',
        name:'透视之眼',
        nameenglish:"RUSH TO THE DEAD SUMMER",
        author:'星辉',
        type:'小说',
        mes:'不平凡的际遇让他的双眼有了奇特功能。',
        done:'[连载中...]',
        look:"32",
        fire:"98"
    },
    {   
        id:'4', 
        url:"#/bookcover",
        fengmian:'images/mjh/sy-mjh_73.png',
        name:'我是小普通',
        nameenglish:"RUSH TO THE DEAD SUMMER",
        author:'味精SMG',
        type:'治愈',
        mes:'你不知道的女生小心思，都储存在这里。',
        done:'[连载中...]',
        look:"32",
        fire:"98"
    },
    {
        id:'5',
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_hc.jpg",
        name:"幻城",
        nameenglish:"ICE FANTASY",
        author:"郭敬明",
        done:'[已完结...]',
        look:"32",
        fire:"98"
    },
    {
        id:'6',
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_hc.jpg",
        name:"幻城",
        nameenglish:"ICE FANTASY",
        author:"郭敬明",
        done:'[已完结...]',
        look:"32",
        fire:"98"
    }
]

var homeshujia=[
    {
        id:'1', 
        url:"#/bookcover",
        fengmian:"images/zlf_images/zlf_dmbj.jpg",
        name:"盗墓笔记",
        nameenglish:"THE LOST TOMB",
        author:"南派三叔",
        done:'[已完结...]',
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
        done:'[已完结...]',
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
        done:'[已完结...]',
        look:"32",
        fire:"98"
    }
    
]
// 书架
var shujiaitem=angular.module('shujiaitem',[]);
shujiaitem.controller('shujia',function($scope){
    $scope.shujiafind=shujiafind;
    $scope.shujiashoucang=shujiashoucang;
    $scope.homeshujia=homeshujia;
    $scope.topFlag=true;
    $scope.changeQuanzi=function(f){
        $scope.topFlag=f;
        console.log($scope.topFlag)
    }
})