class UserModel {
    constructor(user) {
        user = user || {}
        this.id = user.id || 0
        this.firstname = user.firstname
        this.lastname = user.lastname
    }
}


module.exports = (app) => {

    return UserModel;

}


