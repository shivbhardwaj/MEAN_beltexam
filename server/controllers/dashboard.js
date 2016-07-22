var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Polls = mongoose.model('Polls');

module.exports = (function() {
	return {
    getPolls: function(req, res){
      Polls.find({}, function(err, polls){
        if(err){
          console.log("err in the getPolls method in the backend controller", err);
        }
        else{
          console.log('successfully found the polls from the DB!', polls);
          res.json(polls);
        }
      })
    },
	// 	create: function(req, res) {
	// 		console.log('entered backend users controller');
	// 		var newUser = new User(req.body);
	// 		newUser.save(function(err, data) {
	// 			if(err)
	// 				console.log("this is the err from the backend users controller when invoking create method", err);
	// 			else{
	// 				console.log('successfully created user...', data);
	// 				res.json(data);
	// 			}
	// 		})
	// 	},
  //
	// 	read: function(req, res) {
	// 		User.find({}, function(err, data) {
	// 			if(err)
	// 				console.log("user 19", err)
	// 			else
	// 				res.json(data)
	// 		})
	// 	},
  //
	// 	readOne: function(req, res) {
	// 		User.find({ _id: req.params.id }, function(err, data) {
	// 			if(err)
	// 				console.log("user 28", err);
	// 			else
	// 				res.json(data);
	// 		})
	// 	}
  // }
})();
