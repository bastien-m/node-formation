// const fakeUser = require('./mock/fake.user')
const mongoose = require('mongoose')

module.exports = (app) => {

    getById = (id) => {
        return app.models.user.findById(id)
    }

    create = (user) => {
        if (user.id) {
            const error = new app.models.applicationError(2, 'Resource already exist', console.trace())
            return Promise.reject(error)
        }
        const newUser = new app.models.user({
            _id: new mongoose.Types.ObjectId(),
            firstname: user.firstname,
            lastname: user.lastname
        })
        return new Promise((resolve, reject) => {
            newUser.save(err => {
                if (err) {
                 return reject(new app.models.applicationError(4, 'Cannot save new resouce', console.trace()))   
                }
                return resolve(newUser)
            })
        })
    }

    getAll = () => app.models.user.find({})

    return {
        getById,
        getAll,
        create
    }
}
