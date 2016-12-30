/* 
* @Author: Marte
* @Date:   2016-12-30 16:42:17
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-30 17:49:28
*/
var data=[
    {
        "photo":"软萌萌",
        "name":@name,
        "title":@title,
        "comment":@comment,
        "city":@city,
        "cityenglish":@cityenglish,
        "zannum":@zannum
        "commentnum":@commentnum
    },
    {
        "id":2,
        "title":"舞台音效",
        "time":"2016-12-2",
        "content":"甚至根据",
        "url":"#/show/2"
    },
    {
        "id":3,
        "title":"这个",
        "time":"2016-12-2",
        "content":"为什么这位在",
        "url":"#/show/3"
    }
]
var directive=angular.module('directive',[]);
directive.directive('quanzilis',function(){
    return {
         restrict:'ECMA',
         remplateUrl:'../directive/quanzilis/quanzilis.html',
         scope:{
            photo:@photo,
            name:@name,
            title:@title,
            comment:@comment,
            city:@city,
            cityenglish:@cityenglish,
            zannum:@zannum
            commentnum:@commentnum

         }
    }
})