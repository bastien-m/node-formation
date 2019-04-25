const fakeUser = require('./mock/fake.user')

module.exports = (app) => {

    getById = (id) => {
        return Promise.resolve(fakeUser.find(u => u.id === +id))
    }

    create = (user) => {
        if (user.id) {
            const error = new app.models.applicationError(2, 'Resource already exist', console.trace())
            return Promise.reject(error)
        }
        user.id = fakeUser.reduce((prev, curr) => curr.id > prev ? curr.id : prev, 0) + 1
        fakeUser.push(user)
        return Promise.resolve(user)
    }

    getAll = () => Promise.resolve(fakeUser)

    return {
        getById,
        getAll,
        create
    }
}
