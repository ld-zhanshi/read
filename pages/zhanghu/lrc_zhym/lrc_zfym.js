
var lrc_dingdan=[
	{
		"title":"商务套装BUSINESS SUIT",
		"tishi":"选择货到付款提交订单后完成此次操作",
		"price":"126.00",
		"number":"01"
	},
	{
		"title":"商务套装BUSINESS SUIT",
		"tishi":"使用本地钱包完成支付可获得更多优惠",
		"price":"156.00",
		"number":"02"
	},
	{
		"title":"商务套装BUSINESS SUIT",
		"tishi":"选择菜单中的查看源文件就可以通过",
		"price":"226.00",
		"number":"01"
	}
]
var app=angular.module('app',[])
app.controller('lrc_dingdan1',function($scope){
    $scope.lrc_dingdan1=lrc_dingdan;
    console.log($scope.lrc_dingdan1)
})