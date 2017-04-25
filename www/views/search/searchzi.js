app.controller('searchziCtrl', function($scope, $http, $stateParams) {
	$scope.name = $stateParams.name
	$scope.bookers = []
		//https://mhjkm.1391.com/comic_v2/searchbookauthor?
		//apptype=8&appversion=1.0&channel=web-app&name=暴走邻家&type=2&pageno=1&pagesize=100
	$http.get('https://mhjkm.1391.com/comic_v2/searchbookauthor', {
		params: {
			apptype: 8,
			appversion: 1.0,
			channel: 'web-app',
			name: $stateParams.name,
			type: 2,
			pageno: 1,
			pagesize: 100
		}
	}).then(function(res) {
		console.log(res)
		$scope.bookers = res.data.info
	})
	$scope.back = function() {
		window.history.back()
	}
})