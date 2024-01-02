const userController = require('../controller/userController');
const {authChecker} = require("../../config/jwtMiddleware");

module.exports = function (app) {
    app.post('/3out/signup', userController.signUp);
    app.post('/3out/signin', userController.signIn);
    app.post('/3out/refresh', authChecker, userController.refresh);
    app.get('/3out/home/profile', authChecker, userController.getProfile);
}