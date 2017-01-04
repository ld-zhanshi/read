var fil=angular.module('fil',[]);

// fil.controller('c',function($scope,$filter){
//     console.log($filter('filter')(sheququanzi,{'$':'A'}))
// })
// 
fil.run(function($rootScope,$filter){
    $rootScope.sousuo=''
    console.log($filter('filter')(sheququanzi,{'$':'a' }))

})