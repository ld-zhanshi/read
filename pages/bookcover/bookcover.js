/* 
* @Author: Marte
* @Date:   2017-01-02 22:17:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 18:16:12
*/

var tltuijian=[
    {
        bookcover:'https://img3.doubanio.com/mpic/s1001902.jpg',
        title:'小王子',
        titleenglish:'Princekin',
        photo:'images/gl_images/tx.png',
        author:'圣埃克苏佩里 ',
        contain:'小王子驾到！大家好，我是小王子，生活在B612星球，别看我是王子出生，我要做的事...'
    },
    {
        bookcover:'https://img1.doubanio.com/mpic/s3901817.jpg',
        title:'可爱的Python',
        titleenglish:'Cute Python',
        photo:'images/gl_images/tx.png',
        author:'哲思社区',
        contain:'本书的内容主要来自CPyUG社区的邮件列表，由Python的行者根据自身经验组织而成，是为从...'
    },
    {
        bookcover:'https://img1.doubanio.com/mpic/s6569607.jpg',
        title:'商业的常识',
        titleenglish:'Business Common',
        photo:'images/gl_images/tx.png',
        author:'申音',
        contain:'★为什么美国没有史玉柱，中国没有乔布斯？★什么是“对的行业”、“错的行业”？...'
    }
]
var bookcon=[
    {
        id:'1',
        url:'#/show',
        title1:'THE SNOW',
        title2:'LINE WELDING KNIFE',
        title:'雪中悍刀行',
        done:'玄幻奇幻-完结',
        author:'烽火戏诸侯',
        time:'2016-12-31',
        contain:'有个白狐儿脸，佩双刀绣冬春雷，要做那天下第一。湖底有白发老魁爱吃荤。缺门牙老仆背剑匣。山上有个骑青牛的年轻师叔祖，不敢下山。有个骑熊猫抗向日葵不太冷的少女杀手。',
        love:'234',
        comment:'842'
    }
]
var bookcoveritem=angular.module("bookcoveritem",[])
bookcoveritem.controller("bookcover",function($scope){
    $scope.tltuijian=tltuijian;
    $scope.bookcon=bookcon;
})

