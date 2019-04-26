const mongoose = require('mongoose')

module.exports = (app) => {

    const UserModel = mongoose.model('user', {
        firstname: String,
        lastname: String
    })

    return UserModel;

}


