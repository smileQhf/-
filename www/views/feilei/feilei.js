app.controller('feileiCtrl', function($scope, $http) {
	//	https://mhjkm.1391.com/comic_v2/getproad?
	//	apptype=8&appversion=1.0&channel=web-app&adgroupid=125
	$scope.fens = []
	$http.get('https://mhjkm.1391.com/comic_v2/getproad', {
		params: {
			apptype: 8,
			appversion: 1.0,
			channel: 'web-app',
			adgroupid: 125
		}
	}).then(function(res) {
		console.log(res)
		$scope.fens = res.data.info
	})
	$scope.back = function() {
		window.history.back()
	}
})