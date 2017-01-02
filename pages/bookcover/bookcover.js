/* 
* @Author: Marte
* @Date:   2017-01-02 22:17:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-02 23:51:57
*/

var tltuijian=[
    {
        bookcover:'images/gl_images/1.jpg',
        title:'轻触',
        titleenglish:'Tickle',
        photo:'images/gl_images/tx.png',
        author:'詹姆斯·李瑞淳',
        contain:'轻轻触碰，是指尖温度的传递，是两个灵魂的颤栗，是岁月的倾述...'
    },
    {
        bookcover:'images/gl_images/1.jpg',
        title:'轻触',
        titleenglish:'Tickle',
        photo:'images/gl_images/tx.png',
        author:'詹姆斯·李瑞淳',
        contain:'轻轻触碰，是指尖温度的传递，是两个灵魂的颤栗，是岁月的倾述...'
    },
    {
        bookcover:'images/gl_images/1.jpg',
        title:'轻触',
        titleenglish:'Tickle',
        photo:'images/gl_images/tx.png',
        author:'詹姆斯·李瑞淳',
        contain:'轻轻触碰，是指尖温度的传递，是两个灵魂的颤栗，是岁月的倾述...'
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