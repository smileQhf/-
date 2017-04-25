app.controller('homeCtrl', function($scope, $http,$interval,$ionicSlideBoxDelegate,$ionicLoading){
//	https://mhjkm.1391.com/comic_v2/getproad?
//apptype=8&appversion=1.0&channel=web-app&adgroupid=123
	$scope.attrs = []
	$scope.lists = []
	$ionicLoading.show()
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
		params:{
			apptype:8,
			appversion:1.0,
			channel:'web-app',
			adgroupid:123
		}
	}).then(function(res){
		console.log(res)
		$scope.attrs = res.data.info
	})
//	https://mhjkm.1391.com/comic_v2/getproad?
//apptype=8&appversion=1.0&channel=web-app&adgroupid=124&pageno=1&pagesize=20
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
		params:{
			apptype:8,
			appversion:1.0,
			channel:'web-app',
			adgroupid:124,
			pageno:1,
			pagesize:20
		}
	}).then(function(res){
		console.log(res)
		$scope.lists = res.data.info
		if (res) {
			$ionicLoading.hide()
		}
	}).catch(function(res){
		console.log('数据获取失败')
		$ionicLoading.show({
			duration:3000,
			template:'获取数据失败'
		})
	})
//	自动轮播
	$interval(function(){
	        $ionicSlideBoxDelegate.update();
	        $ionicSlideBoxDelegate.loop(true);
    },1000);
    
//		var height = document.querySelector('ion-header-bar').offsetHeight
		//	console.log(height)
		//	滚动视图的高度
//	$scope.getHeight = function() {
//			return parseInt(window.innerHeight - height) + 'px'
//		}
//			console.log($scope.getHeight)
//$scope.getWidth = function () {
//  return window.innerWidth + 'px';
//};
})