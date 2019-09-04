const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://movie_user:1qaz2wsx@ds217078.mlab.com:17078/movie-api', {useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error ', err);
    });

    mongoose.Promise = global.Promise;
}