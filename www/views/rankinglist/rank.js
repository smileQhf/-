//http://api.hmpiaowu.com/heimaticket-web-api/home/getRecommendList.json
app.controller('rank', function($scope, $http, $ionicLoading) {
	//	$scope.ranks = []
	//	$http.get('http://api.hmpiaowu.com/heimaticket-web-api/home/getRecommendList.json').then(function(res) {
	//		console.log(res)
	//		$scope.ranks = res.data.data.recommendList
	//	}).catch(function(err) {
	//		console.log(123)
	//	})
	$scope.current = 0
		//数据总页数
	$scope.total = 1

	//主页列表数据
	$scope.recommends = []
	$ionicLoading.show()
	$scope.loadMore = function() {
		if($scope.current < $scope.total) {
			$scope.current++
				$http.get("http://api.hmpiaowu.com/heimaticket-web-api/home/getRecommendList.json", {
					params: {
						cityId: "",
						currentPage: $scope.current,
						pageCount: "5"
					}
				}).then(function(res) {
					console.log(res)
					if(res) {
						$ionicLoading.hide()
					}
					//				$scope.recommends = $scope.recommends.concat(res.data.data.recommendList)
					angular.forEach(res.data.data.recommendList, function(recommend) {
						$scope.recommends.push(recommend);
					});

					$scope.$broadcast('scroll.infiniteScrollComplete')
					$scope.total = res.data.data.totalPage
				}).catch(function(err) {
					$ionicLoading.show({
						duration: 3000,
						template: '获取数据失败'
					})
				})
		} else {
			$ionicLoading.show({
				template: '没有更多数据....',
				duration: 3000,
			})
		}
	}

	$scope.$on('stateChangeSuccess', function() {
		$scope.loadMore();
	})
	$scope.back = function() {
		window.history.back()
	}
})