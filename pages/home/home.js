
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
var indexjiejiu=[
    {
        bookcover:'images/mjh/sy-mjh_54.png',
        photo:'images/mjh/sy-mjh_58.png',
        titleenglish:'the three musketeers',
        mes:'三个火枪手是法国作家...',
        done:'[已完结]',
        author:'AUMAS',
        look:'2432',
        fire:'983'
    },
    {
        bookcover:'images/mjh/sy-mjh_54.png',
        photo:'images/mjh/sy-mjh_58.png',
        titleenglish:'the three musketeers',
        mes:'三个火枪手是法国作家...',
        done:'[已完结]',
        author:'AUMAS',
        look:'2432',
        fire:'983'
    }
]
var indexxinshu=[
    {
        bookcover:'images/mjh/sy-mjh_73.png',
        title:'我是小普通',
        author:'味精SMG',
        type:'治愈',
        mes:'你不知道的女生小心思，都储存在这里。',
        done:'[连载中...]'
    },
    {
        bookcover:'images/mjh/sy-mjh_73.png',
        title:'我是小普通',
        author:'味精SMG',
        type:'治愈',
        mes:'你不知道的女生小心思，都储存在这里。',
        done:'[连载中...]'
    }
]
// 首页
var homeitem=angular.module('homeitem',[])
homeitem.controller('home',function($scope){
    $scope.tltuijian=tltuijian;
    $scope.indexjiejiu=indexjiejiu;
    $scope.indexxinshu=indexxinshu;
})


// var swiper = new Swiper('.mjh_banner', {
//         pagination: '.swiper-pagination',
//         loop : true,
//         paginationClickable: true,
//         spaceBetween: 0,
//         centeredSlides: true,
//         autoplay: 2500,
//         autoplayDisableOnInteraction: false
//     });
    
// touch.on('.mjh-sh-wk', 'drag', function(e){
//     var mx=parseInt($('.mjh-sh-wk').css('marginLeft')) 
//     if(!mx){mx=0}
//     var wx=$(".mjh-sh-wk").width()-$(".mjh-sh-wkw").width();
//     var mx=mx+e.distanceX
//     if(0>mx&&mx>-wx){
//         $('.mjh-sh-wk').css({marginLeft:mx})
//     }
// })

// touch.on('.mjh-xs-wk', 'swipe', function(e){
//     var mx=parseInt($('.mjh-xs-wk').css('marginLeft')) 
//     if(!mx){mx=0}
//     var wx=$(".mjh-xs-wk").width()-$(".mjh-xs-wkw").width();
//     var mx=mx+e.distanceX
//     if(0>mx&&mx>-wx){
//         $('.mjh-xs-wk').css({marginLeft:mx})
//     }
// })