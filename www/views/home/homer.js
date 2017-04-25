app.controller('homerCtrl', function($scope, $http, $stateParams, $ionicActionSheet, $state) {
	$state.go("zi.pingjia")
	$scope.nums = [{
			num1: 1,
			num2: 2
		}, {
			num1: 3,
			num2: 4
		}, {
			num1: 5,
			num2: 6
		}, {
			num1: 7,
			num2: 8
		}, {
			num1: 9,
			num2: 10
		}, {
			num1: 11,
			num2: 12
		}, {
			num1: 13,
			num2: 14
		}, {
			num1: 15,
			num2: 16
		}, {
			num1: 17,
			num2: 18
		}, {
			num1: 19,
			num2: 20
		}, {
			num1: 21,
			num2: 22
		},
		//			{23,24},
		//			{25,26},
		//			{27,28},
		//			{29,30},
	]
	$scope.share = function() {
		$ionicActionSheet.show({
			buttons: [{
				text: '<p>分享到</p><div><img src="../../img/share.png" alt="" /></div><p>QQ空间</p>',
			}],
			//			取消按钮
			cancelText: '取消',
		})
	}
	console.log('进入页面')
	$http({
			//		?apptype=8&appversion=1.0&channel=web-app
			method: "post",
			url: "https://mhjkm.1391.com/comic_v2/bloglist?apptype=8&appversion=1.0&channel=web-app",
			data: {
				'{"type":3,"pageno":1,"pagesize":20,"userid":null,"bigbookid":"64955"}': ""
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj) {
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				}
				return str.join("&");
			}

		})
		.then(function(res) {
			console.log('获取数据')
			console.log(res.data)
			$scope.luns = res.data.info.list
		}).catch(function(err) {
			console.log('获取失败')
		})
	$scope.back = function() {
		window.history.back()
	}
	$scope.red1 = false
	$scope.red2 = true
	$scope.check1 = function() {
		$scope.red1 = true
		$scope.red2 = false
	}
	$scope.check2 = function() {
		$scope.red2 = true
		$scope.red1 = false
	}
})