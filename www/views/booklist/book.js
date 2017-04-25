app.controller('bookCtrl', function($scope, $http, $interval, $ionicSlideBoxDelegate, $ionicLoading) {
	//	https://mhjkm.1391.com/comic_v2/getproad?
	//	apptype=8&appversion=1.0&channel=web-app&adgroupid=130
	$scope.books = []
	$scope.booklists = []
	$scope.bookers = []
	$ionicLoading.show()
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
			params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				adgroupid: 130
			}
		}).then(function(res) {
			console.log(res)
			$scope.books = res.data.info
		})
		//https://mhjkm.1391.com/comic/recommendspecial_sb?
		//apptype=8&appversion=1.0&channel=web-app&retype=3
	$http.get('https://mhjkm.1391.com/comic/recommendspecial_sb', {
			params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				retype: 3
			}
		}).then(function(res) {
			console.log(res)
			$scope.booklists = res.data.info.specials
			if(res) {
				$ionicLoading.hide()
			}
		}).catch(function(res) {
			console.log('数据获取失败')
			$ionicLoading.show({
				duration: 3000,
				template: '获取数据失败'
			})
		})
		//	自动轮播
	$interval(function() {
		$ionicSlideBoxDelegate.update();
		$ionicSlideBoxDelegate.loop(true);
	}, 1000);
	$scope.back = function() {
		window.history.back()
	}
})