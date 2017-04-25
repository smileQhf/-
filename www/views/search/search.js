app.controller('searchCtrl', function($scope, $http) {
	//	https://mhjkm.1391.com/comic/hotsearch?
	//apptype=8&appversion=1.0&channel=web-app&appType=8
	$scope.Searchs = []
	$http.get('https://mhjkm.1391.com/comic/hotsearch', {
		params: {
			apptype: 8,
			appversion: 1.0,
			channel: 'web-app',
			appType: 8
		}
	}).then(function(res) {
		console.log(res)
		$scope.Searchs = res.data.info
	})
	$scope.back = function() {
		window.history.back()
	}
	$scope.words=[]
	$scope.send=function(val){
		$http.get('https://mhjkm.1391.com/comic_v2/searchindex',{
			params: {
			apptype: 8,
			appversion: 1.0,
			channel: "web-app",
			name:val,
			type:2,
		}
		})
		.then(function(res){
			console.log(res)
			$scope.words=res.data.info
			
		})
		.catch(function(err){
			$scope.words="没有匹配项"
		})
	}
	$scope.zero=function(){
		$scope.words=[]
	}
})