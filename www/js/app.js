var app = angular.module('myApp', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home')
	$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'views/home/home.html',
			controller: 'homeCtrl'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'views/search/search.html',
			controller: 'searchCtrl'
		})
		.state('feilei', {
			url: '/feilei',
			templateUrl: 'views/feilei/feilei.html',
			controller: 'feileiCtrl'
		})
		.state('my', {
			url:'/my',
			templateUrl:'views/home/my.html',
			controller:'myCtrl'
		})
		.state('original', {
			url: '/original',
			templateUrl: 'views/original/original.html',
			controller: 'originalCtrl'
		})
//		.state('dan', {
//			url: '/dan/:id',
//			templateUrl: 'views/original/originzi.html',
//			controller: 'oriziCtrl'
//		})
		.state('book', {
			url: '/book',
			templateUrl: 'views/booklist/book.html',
			controller: 'bookCtrl'
		})
		.state('zi', {
			url: '/zi/:id',
			templateUrl: 'views/home/homer.html',
			controller: 'homerCtrl'
		})
		.state('bookzi', {
			url: '/bookzi/:id/:name',
			templateUrl: 'views/booklist/booker.html',
			controller: 'bookerCtrl'
		})
		.state('qiao', {
			url: '/qiao/:name',
			templateUrl: 'views/search/searchzi.html',
			controller: 'searchziCtrl'
		})
		.state('rank', {
			url: '/rank',
			templateUrl: 'views/rankinglist/rank.html',
			controller: 'rank'
		})
		.state('zi.mulu', {
			url: '/mulu',
			views: {
				"mulu": {
					templateUrl: "views/home/touter/mulu.html"
				}
			}
		})
		.state('zi.pingjia', {
			url: '/pingjia',
			views: {
				"pingjia": {
					templateUrl: "views/home/touter/pingjia.html"
				}
			}
		})
		.state('xiangqing', {
			url: '/xiangqing',
			views: {
				"": {
					//					templateUrl: "views/home/touter/pingjia.html"
					templateUrl: 'views/home/xiangqing.html',
					controller: 'xiqgCtrl'
				}
			}
		})
		.state('shoucang', {
			url: '/shoucang',
			templateUrl: 'views/home/shoucang.html',
			controller: 'shoucangCtrl'
		})
		.state('shoucang.shou', {
			url: '/shoucang',
			views: {
				"shou": {
					templateUrl: "views/home/touter/shouca.html"
				}
			}
		})
		.state('shoucang.history', {
			url:'/shoucang',
			views:{
				'history':{
					templateUrl: "views/home/touter/history.html"
				}
			}
		})
		.state('login', {
			url:'/login',
			templateUrl:'views/home/login.html',
			controller:'loginCtrl'
		})
		.state('zhuce',{
			url:'/zhuce',
			templateUrl:'views/home/zhuce.html',
			controller:'zhuceCtrl'
		})
		.state('manzhan', {
			url:'/manzhan',
			templateUrl:'views/home/manzhan.html',
			controller:'manzhanCtrl'
		})
		.state('manzhan.draw', {
			url:'/manzhan',
			views:{
				'draw':{
					templateUrl:"views/home/touter/draw.html"
				}
			}
		})
		.state('manzhan.around', {
			url:'/manzhan',
			views:{
				'around':{
					templateUrl:"views/home/touter/around.html"
				}
			}
		})
})