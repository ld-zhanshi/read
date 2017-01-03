
var tltuijian=[
    {
        bookcover:'https://img3.doubanio.com/mpic/s1001902.jpg',
        title:'小王子',
        titleenglish:'Princekin',
        photo:'images/gl_images/tx.png',
        author:'圣埃克苏佩里 ',
        contain:'小王子驾到！大家好，我是小王子，生活在B612星球，别看我是王子出生...'
    },
    {
        bookcover:'https://img1.doubanio.com/mpic/s3901817.jpg',
        title:'可爱的Python',
        titleenglish:'Cute Python',
        photo:'images/gl_images/tx.png',
        author:'哲思社区',
        contain:'本书的内容主要来自CPyUG社区的邮件列表，由Python的行者根据自身经验...'
    },
    {
        bookcover:'https://img1.doubanio.com/mpic/s6569607.jpg',
        title:'商业的常识',
        titleenglish:'Business Common',
        photo:'images/gl_images/tx.png',
        author:'申音',
        contain:'★为什么美国没有史玉柱，中国没有乔布斯？★什么是“对的行业”、“错的...'
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
        bookcover:'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=fdceb64c524e9258a6618ee8acb2fd60/c75c10385343fbf246fcf80bb47eca8064388fc2.jpg',
        photo:'images/mjh/sy-mjh_58.png',
        titleenglish:'the three musketeers',
        mes:'三个火枪手是法国作家...',
        done:'[已完结]',
        author:'AUMAS',
        look:'2214',
        fire:'666'
    }
]
var indexxinshu=[
    {
        bookcover:'https://img3.km.com/bookimg/public/uploads/cover/thumb2/20151127115509.jpg',
        title:'透视之眼',
        author:'星辉',
        type:'小说',
        mes:'不平凡的际遇让他的双眼有了奇特功能。',
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