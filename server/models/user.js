var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	surveys      :[{ type: mongoose.Schema.Types.Mixed, ref: "Surveys" }],
	votes       :[{ type: mongoose.Schema.Types.Mixed, ref: "Votes" }]
})

mongoose.model("Users", userSchema);
