const userController = require('../controller/userController');

module.exports = function (app) {
    app.post('/3out/signup', userController.signUp);
    app.post('/3out/signin', userController.signIn);
}