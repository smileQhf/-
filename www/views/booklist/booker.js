app.controller('bookerCtrl', function($scope, $http, $stateParams) {
	$scope.name = $stateParams.name
	$scope.bookers = []
	$scope.tuijians = []
		//	https://mhjkm.1391.com/comic/specialdesc?
		//	apptype=8&appversion=1.0&channel=web-app&specialid=735
	$http.get('https://mhjkm.1391.com/comic/specialdesc', {
		params: {
			apptype: 8,
			appversion: 1.0,
			channel: 'web-app',
			specialid: $stateParams.id
		}
	}).then(function(res) {
		console.log(res)
		$scope.bookers = res.data.info.specialdescription
	})
	$scope.back = function() {
		window.history.back()
	}
//	https://mhjkm.1391.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=124&pageno=1&pagesize=20
	$http.get('https://mhjkm.1391.com/comic_v2/getproad',{
		params: {
				apptype: 8,
				appversion: 1.0,
				channel: 'web-app',
				adgroupid: 124,
				pageno:1,
				pagesize:5
			}
	})
	.then(function(res){
		console.log(res)
		$scope.tuijians = res.data.info
	}).catch(function(err){
		console.log('获取失败')
	})
})