const mongoose = require('mongoose');
//db cn
mongoose.connect('mongodb://localhost/fatify_api');
mongoose.Promise = global.Promise;
module.exports = mongoose;