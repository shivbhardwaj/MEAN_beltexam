var user = require('./../controllers/users.js');

module.exports = function(app){

	app.get('/', function(req, res) {
		res.render('login');
	});

	app.get('/user', function(req, res) {
		user.read(req, res);
	});

	app.post('/user', function(req, res) {
		user.create(req, res);
	});

	app.get('/dashboard', function(req, res){
		console.log('made it to my /dashboard get route on the back end');
		polls.getPolls(req, res);
	})

	// app.post('/mongoose', function(req, res){
	// 	console.log('made it to my /mongoose route');
	// 	mongooses.createMongoose(req, res);
	//
	// })
	// app.get('/mongoose', function(req, res){
	// 	console.log(' made it to my /mongoose get route');
	// 	mongooses.getMongooses(req, res);
	// })
	//
	// app.get('/mongoose/:id', function(req, res){
	// 	console.log('made it to my /mongoose/:id get route');
	// 	mongooses.getMongoose(req, res);
	// })
	//
	// app.post('/mongoose/:id/update', function(req, res){
	// 	console.log('made it to my /mongoose/:id/update post route');
	// 	mongooses.updateMongoose(req, res);
	// })
}
