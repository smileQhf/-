app.controller('originalCtrl', function($scope, $http, $interval, $ionicSlideBoxDelegate, $ionicLoading) {
	//	https://mhjkm.1391.com/comic_v2/getproad?
	//	apptype=8&appversion=1.0&channel=web-app&adgroupid=126
	$scope.Originals = []
	$scope.olists = []
	$scope.luns = []
	$ionicLoading.show()
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
			params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				adgroupid: 126
			}
		}).then(function(res) {
			console.log(res)
			$scope.Originals = res.data.info
		})
		//https://mhjkm.1391.com/comic_v2/getproad?
		//	apptype=8&appversion=1.0&channel=web-app&adgroupid=127&pageno=1&pagesize=60
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
			params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				adgroupid: 127,
				pageno: 1,
				pagesize: 60
			}
		}).then(function(res) {
			console.log(res)
			$scope.olists = res.data.info
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