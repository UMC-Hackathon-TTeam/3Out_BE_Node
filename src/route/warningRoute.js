const warningController = require('../controller/warningController');
const {authChecker} = require("../../config/jwtMiddleware");

module.exports = function (app) {
    app.get('/3out/warnings', authChecker, warningController.warningFriendList);
    app.get('/3out/warnings/detail', authChecker, warningController.warningFriendDetail);
    app.post('/3out/warnings/comment', authChecker, warningController.warningFriendComment);
}