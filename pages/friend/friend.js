/* 
* @Author: Marte
* @Date:   2017-01-03 00:19:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 14:59:12
*/

app.run(function($rootScope){
    $rootScope.neirong=neirong;
})
var frienditem=angular.module("frienditem",[])
frienditem.controller("friend",function($scope){
    // $scope.neirong=neirong;
})
frienditem.directive('synews',function(){
	return {
		controller:function($scope){
			$scope.index=0
		},
		link:function(scope,element,attr){ 
            $(".sy_news_left").click(function(e){
            	var mu=e.target;
            	$(this).children().removeClass("active")
            	$(mu).addClass("active")
            })
		}
	}
})