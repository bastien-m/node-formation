module.exports = (app) => {

    app.get('/user/:id', app.controllers.user.get),
    app.get('/user', app.controllers.user.get),
    app.post('/user', app.controllers.user.create)
    app.get('*', (req, res) => res.status(404).json({}))
}
