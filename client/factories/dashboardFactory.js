myApp.factory('dashboardFactory', function($http, $location) {
	var factory = {};
  var poll=[];

  factory.getPolls = function(callback){
		console.log('made it to dashboard factory getPolls method');
		$http.get('/dashboard').then(function(polls){
			console.log('made it back from backend these are all the created polls', polls);
			poll = polls.data;
			callback(poll);
		})
	}




// 	var thisUser = null;
//
// 	factory.readUsers = function(user, callback) {
// 		var newUser = true;
// 		$http.get('/user').success(function(data) {
// 			angular.forEach(data, function(regUser) {
// 				if(user.name == regUser.name) {
// 					console.log(user.name, "matches", regUser.name);
// 					newUser = false;
// 					thisUser = regUser
// 					$location.path('/dashboard');
// 				}
// 			})
// // If user does not exist, create new user and redirect to dashboard
// 			if(newUser == true) {
// 				console.log("User is new, Creating...");
// 				$http.post('/user', user).success(function(data) {
// 					console.log("New user has been created...", data)
// 					thisUser = data;
// 					$location.path('/dashboard');
// 				})
// 			}
// 		})
// 		callback(thisUser);
// 	}
//
//   factory.readUser = function(callback) {
//   		callback(thisUser);
//   }
//
// 	factory.viewUser = function(id, callback) {
// 		$http.get('/user/'+id).success(function(data) {
// 			callback(data[0]);
// 		})
// 	}

  return factory;
})
