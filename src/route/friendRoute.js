const {authChecker} = require("../../config/jwtMiddleware");
const friendController = require('../controller/friendController')

module.exports = function (app) {
    app.post('/3out/home/add', authChecker, friendController.addNewFriend);
    app.get('/3out/home', authChecker, friendController.getFriendsList);
    app.get('/3out/home/:friendId', authChecker, friendController.getFriendInfo);
    app.post('/3out/home/:friendId/records', authChecker, friendController.insertRecordToFriend);
}