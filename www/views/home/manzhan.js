app.controller('manzhanCtrl', function($scope, $state, $http, $ionicLoading) {
	$state.go('manzhan.draw')
	$scope.current = 0
		//数据总页数
	$scope.total = 1
	//主页列表数据
	$scope.draws = []
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
						$scope.draws.push(recommend);
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
	
	$scope.red1=true
	$scope.red2=false
	$scope.check1=function(){
		$scope.red1=true
		$scope.red2=false
	}
	$scope.check2=function(){
		$scope.red2=true
	$scope.red1=false
	}
	
	
})