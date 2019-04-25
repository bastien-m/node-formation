module.exports = (app) => {

    get = (req, res) => {
        if (req.params.id) {
            app.services.user.getById(req.params.id)
                .then(user => res.json(user))
        } else {
            app.services.user.getAll()
                .then(users => res.json(users))
        }
    }

    create = (req, res) => {
        if (req.body) {
            app.services.user.create(req.body)
                .then(user => res.json(user))
                .catch(err => res.status(400).json(err))
        } else {
            const error = new app.models.applicationError(1, 'Missing resource', console.trace())
            res.status(400).json(error)
        }
    }


    return {
        get,
        create
    }

}
