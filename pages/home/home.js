var swiper = new Swiper('.mjh_banner', {
        pagination: '.swiper-pagination',
        loop : true,
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

touch.on('.mjh-sh-wk', 'drag', function(e){
    var mx=parseInt($('.mjh-sh-wk').css('marginLeft')) 
    if(!mx){mx=0}
    var wx=$(".mjh-sh-wk").width()-$(".mjh-sh-wkw").width();
    var mx=mx+e.distanceX
    if(0>mx&&mx>-wx){
        $('.mjh-sh-wk').css({marginLeft:mx})
    }
})

touch.on('.mjh-xs-wk', 'swipe', function(e){
    var mx=parseInt($('.mjh-xs-wk').css('marginLeft')) 
    if(!mx){mx=0}
    var wx=$(".mjh-xs-wk").width()-$(".mjh-xs-wkw").width();
    var mx=mx+e.distanceX
    if(0>mx&&mx>-wx){
        $('.mjh-xs-wk').css({marginLeft:mx})
    }
})