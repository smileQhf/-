app.controller('shoucangCtrl', function($scope, $state, $http,$ionicLoading) {
	$state.go('shoucang.shou')
	$scope.back = function() {
		window.history.back()
	}
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
			params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				adgroupid: 124,
				pageno: 1,
				pagesize: 5
			}
		})
		.then(function(res) {
			console.log(res)
			$scope.tuijians = res.data.info
		}).catch(function(err) {
			console.log('获取失败')
		})
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
		params: {
			apptype: 8,
			appversion: 1.0,
			channel: 'web-app',
			adgroupid: 127,
			pageno: 1,
			pagesize:6
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
	$scope.red1 = true
	$scope.red2 = false
	$scope.check1 = function() {
		$scope.red1 = true
		$scope.red2 = false
	}
	$scope.check2 = function() {
		$scope.red2 = true
		$scope.red1 = false
	}
})