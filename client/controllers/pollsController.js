myApp.controller('pollsController', function(userFactory, pollsFactory, $scope, $routeParams){
  var pollId = $routeParams.id;

  pollsFactory.getPoll(pollId, function(data){
    console.log('inside the pollsController on the front end', data);
    $scope.polls=data;
  })
  	// $scope.checkUser = function(user) {
  	// 	userFactory.readUsers(user, function(data) {
  	// 	})
  	// }
    //
  	// userFactory.viewUser(id, function(data) {
  	// 	$scope.user = data;
  	// })



});
