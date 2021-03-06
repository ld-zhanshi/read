/* 
* @Author: Marte
* @Date:   2016-12-30 16:42:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-06 14:08:58
*/
var dir=angular.module('dir',[]);
// 首页底部tab栏
dir.directive('indextab',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indextab.html',
        controller:function($scope,$routeParams){
            // console.log($routeParams.id)
            $scope.id=$routeParams.id
        }
    }
})
// 首页标题
dir.directive('indextitle',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indextitle.html',
        scope: {
            titleenglish:"@titleenglish",
            icon:"@icon",
            title:"@title",
            myhref:"@myhref"
        }
    }
})
// 首页banner
dir.directive('indexbanner',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indexbanner.html',
        scope: {
            titleenglish:"@titleenglish",
            icon:"@icon",
            title:"@title",
            myhref:"@myhref"
        },
        link:function(){
            var swiper = new Swiper('.mjh_banner', {
                pagination: '.swiper-pagination',
                loop : true,
                paginationClickable: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            })
        }
    }
})
// 首页banner下轮播
dir.directive('indexlunbo',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indexlunbo.html',
        scope: {
            titleenglish:"@titleenglish",
            icon:"@icon",
            title:"@title",
            myhref:"@myhref"
        },
        link:function(){
            var swiper = new Swiper('.sy_pluul_box', {
                pagination: '.swiper-pagination',
                loop : true,
                paginationClickable: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplayDisableOnInteraction: false
            });
        }
    }
})
// 首页书荒大解决
dir.directive('indexjiejiu',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indexjiejiu.html',
        link:function(){
            touch.on('.mjh-sh-wk', 'drag', function(e){
                var mx=parseInt($('.mjh-sh-wk').css('marginLeft')) 
                if(!mx){mx=0}
                var wx=$(".mjh-sh-wk").width()-$(".mjh-sh-wkw").width();
                var mx=mx+e.distanceX
                if(0>mx&&mx>-wx){
                    $('.mjh-sh-wk').css({marginLeft:mx})
                }
            })
        }
    }
})
// 首页新书速递
dir.directive('indexxinshu',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indexxinshu.html',
        link:function(){
            touch.on('.mjh-xs-wk', 'drag', function(e){
                var mx=parseInt($('.mjh-xs-wk').css('marginLeft')) 
                if(!mx){mx=0}
                var wx=$(".mjh-xs-wk").width()-$(".mjh-xs-wkw").width();
                var mx=mx+e.distanceX
                if(0>mx&&mx>-wx){
                    $('.mjh-xs-wk').css({marginLeft:mx})
                }
            })
        }
    }
})
// 首页搜索
dir.directive('indexsearch',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/indexsearch.html'
    }
})


// 书架发现 书
dir.directive('shujiafind',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shujiafind.html',
        link:function(){
            touch.on('.zlf_wrap', 'drag', function(e){
                var mx=parseInt($('.zlf_wrap').css('marginLeft')) 
                if(!mx){mx=0}
                var wx=$(".zlf_wrap").width()-$(".zlf_item").width();
                var mx=mx+e.distanceX
                if(0>mx&&mx>-wx){
                    $('.zlf_wrap').css({marginLeft:mx})
                }
            })
        }
    }
})
// 书架收藏 书
dir.directive('shujiabook',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shujiabook.html'
    }
})
// 社区圈子顶部bar
// dir.directive('shequtopbar',function(){
//     return {
//         restrict: 'ECMA',
//         templateUrl:'directive/public/shequtopbar.html',
//         scope: {
//             personurl:"@personurl",
//             left:"@left",
//             right:"@right"
//         }
//     }
// })
// 社区圈子列表
dir.directive('sheququanzi',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/sheququanzi.html'
    }
})
// 评论页列表
dir.directive('commentlis',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/commentlis.html'
    }
})

// 社区新增书友
dir.directive('shequadd',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequadd.html'
    }
})
// 社区英文块
dir.directive('shequletter',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequletter.html'
    }
})
// 社区下面好友列表
dir.directive('shequfriend',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/shequfriend.html'
    }
})

// 同类推荐列表
dir.directive('tongleituijian',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/tongleituijian.html',
    }
})

// 好友群列表
dir.directive('friendqunlis',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/friendqunlis.html'
    }
})

// 新增好友
dir.directive('addfriendlis',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/addfriendlis.html'
    }
})

// 特殊关注
dir.directive('speciallis',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/speciallis.html'
    }
})

// 内页top栏
dir.directive('neiyetop',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/neiyetop.html',
        scope: {
            title:"@title",
            titleenglish:"@titleenglish"
        }
    }
})

// show页面底部文字设置
dir.directive('seting',function(){
    return {
        restrict: 'ECMA',
        templateUrl:'directive/public/seting.html',
        link:function(){
            var swiper = new Swiper('.zlf_swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
            });
            touch.on(".zlf_set","tap",function(){
                $(".zlf_swiper").addClass('zlf_hot').css('zIndex','222');
                $('.zlf_mask').css({display:'block',background:'rgba(0,0,0,0.5)'});
            })
            touch.on(".zlf_mask","tap",function(){
                $(".zlf_swiper").removeClass('zlf_hot');
                $('.zlf_mask').css({display:'none',background:'rgba(0,0,0,0.5)'});
            })

        }
    }
})