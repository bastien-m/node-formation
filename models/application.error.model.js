module.exports = class ApplicationErrorModel {
    constructor(code, message, stack) {
        this.code = code
        this.message = message
        this.stack = stack
    }
}