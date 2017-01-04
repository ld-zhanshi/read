var fil=angular.module('fil',[]);


// 
fil.run(function($rootScope,$filter){
    $rootScope.ss={}
    $rootScope.ssno=false
    // $rootScope.ss.sousuo='11111'
    console.log($rootScope.ss.sousuo)
    $rootScope.startss=function(a){
        if($rootScope.ss.sousuo){
            $rootScope.ssjg=$filter('filter')(tltuijian,{'$':$rootScope.ss.sousuo})
            $rootScope.ssno=false
        }
        if($rootScope.ssjg.length==0){
            $rootScope.ssno=true
        }
        
        // console.log(a)
        console.log($rootScope.ssjg)
    }
    

})

// fil.controller('search',function($scope,$filter){
//     $scope.sousuo='11111'
//     $scope.startss=function(){
//         $scope.ssjg=$filter('filter')(tltuijian,{'$':$scope.sousuo})
//         console.log($scope.sousuo)
//         console.log($scope.ssjg)
//     }
// })