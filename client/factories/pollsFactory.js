myApp.factory('pollsFactory', function($http){

	var factory = {};
	var polls = [];

	factory.addPoll = function(data, callback){
		console.log('made it to my pollsfactory');
		$http.post('/add_poll', data).then(function(data){
			console.log('made it back from backend this is our new poll', data);
			polls.push(data);
			callback(polls);
		})
	}
	factory.getPolls = function(callback){
		console.log('made it to polls factory getPolls method');
		$http.get('/polls').then(function(polls){
			console.log('made it back from backend this is all the Polls', polls);
			all_polls = polls;
			callback(all_polls);
		})
	}

	factory.getPoll = function(pollId, callback){
		$http.get('/poll/' + pollId).then(function(poll){
			console.log('made it back from backend this one poll', poll);
			callback(poll);
		})
	}

	return factory;
})
