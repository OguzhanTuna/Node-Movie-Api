const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:abcd1234@ds039231.mlab.com:39231/movie-api',
     { useMongoClient: true });
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected')
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};
