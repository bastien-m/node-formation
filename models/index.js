module.exports = (app) => {
    
    app.models = {
        applicationError: require('./application.error.model'),
        user: require('./user.model')(app)
    }

}
