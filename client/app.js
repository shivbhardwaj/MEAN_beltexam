var myApp = angular.module('Myapp', ['ngRoute']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'userController',
				templateUrl: "partials/login.html"
			})
			.when('/create',
			{
				controller: 'pollsController',
				templateUrl: "partials/create_poll.html"
			})
			.when('/dashboard',
			{
				controller: 'pollsController',
				templateUrl: "partials/dashboard.html"
			})
			// .when('/mongoose/edit/:id', {
			// 	controller: "editController",
			// 	templateUrl: "partials/edit.html"
			// })
			// .when('/mongoose/:id',
			// {
			// 	controller: 'showController',
			// 	templateUrl: "partials/show.html"
			// })
			.otherwise({
        redirectTo: '/'
      });
	})
}());
