myApp.controller('dashboardController', function(pollsFactory, userFactory, $scope, $routeParams){
  userFactory.getUser(function(data){
		console.log('this is data in dashboardController getUser', data);
		$scope.user = data;
	})
  pollsFactory.getPolls(function(data) {
    console.log('inside the dashboard controller', data);
		$scope.polls = data;
	})

});
