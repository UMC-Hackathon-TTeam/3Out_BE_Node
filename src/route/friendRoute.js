const {authChecker} = require("../../config/jwtMiddleware");
const friendController = require('../controller/friendController')

module.exports = function (app) {
    app.post('/3out/home/add', authChecker, friendController.addNewFriend);
}