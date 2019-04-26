const mongoose = require('mongoose')
const config = require('config')

module.exports = (app) => {
    const connectionString = config.get('database.connectionString')

    mongoose.connect(connectionString)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err))

}