app.controller('xiqgCtrl', function($scope, $http) {
		console.log('进入页面')
			//详情
		$http({
//				https://mhjkm.1391.com/comic_v2/blogreplylist?apptype=8&appversion=1.0&channel=web-app
				method: "post",
				url: "https://mhjkm.1391.com/comic_v2/blogreplylist?apptype=8&appversion=1.0&channel=web-app",
				data: {
					'{"blogid":"2801022","type":0,"pageno":1,"pagesize":20,"userid":null}':""
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
				$scope.xiangqs = res.data.info
			}).catch(function(err) {
				console.log('获取失败')
			})
			$scope.back = function(){
				window.history.back()
			}
		})
	