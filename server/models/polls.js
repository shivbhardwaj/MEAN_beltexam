var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollsSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	name        :String,
  option1     :String,
  option2     :String,
  option3     :String,
  option4     :String,
	created_by  :[{ type: mongoose.Schema.Types.Mixed, ref: "Users" }],
	votes       :[{ type: mongoose.Schema.Types.Mixed, ref: "Users" }]
})

mongoose.model("Polls", pollsSchema);
