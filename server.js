/*
 * More details here http://mongoosejs.com/docs/index.html
 */

//require mongoose node module
var mongoose = require('mongoose');

//connect to remote mongodb database
var db = mongoose.connect('mongodb://root:489329@ds043991.mlab.com:43991/itsurvay');

//attach lister to connected event
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});