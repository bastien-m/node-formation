module.exports = (app) => {

    app.services = {
        user: require('./user.service')(app)
    }

}
