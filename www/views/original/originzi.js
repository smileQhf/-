app.controller('oriziCtrl', function($scope, $http, $stateParams, $ionicActionSheet) {
	$state.go("zi.pingjia")
	$scope.share = function() {
		$ionicActionSheet.show({
			buttons: [{
				text: '<p>分享到</p><div><img src="../../img/share.png" alt="" /></div><p>QQ空间</p>',
			}],
			//			取消按钮
			cancelText: '取消',
		})
	}
	$scope.back = function() {
		window.history.back()
	}
})