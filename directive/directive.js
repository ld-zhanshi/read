/* 
* @Author: Marte
* @Date:   2016-12-30 16:42:17
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-31 02:23:39
*/
var directive=angular.module('directive',[]);
app.directive('shequtopbar',function(){
    return {
        templateUrl:'directive/public/shequtopbar.html'
    }
})
// directive.directive('shequTopbar',function(){
//     return {
//          restrict:'ECMA',
//          templateUrl:'shequTopbar/shequTopbar.html',
//          scope:{
//             photo:@photo,
//             name:@name,
//             title:@title,
//             titleelglish:@titleelglish,
//             comment:@comment,
//             city:@city,
//             cityenglish:@cityenglish,
//             zannum:@zannum
//             commentnum:@commentnum

//          }
//     }
// })