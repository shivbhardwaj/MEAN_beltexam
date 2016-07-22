myApp.controller('userController', function(userFactory, $scope, $routeParams){
  var id = $routeParams.id;
  var logged_user = $routeParams.user;

  	$scope.checkUser = function(user) {
  		userFactory.readUsers(user, function(data) {
  		})
      console.log('logged_user');
  	}

  	userFactory.viewUser(id, function(data) {
  		$scope.user = data;
  	})

});
