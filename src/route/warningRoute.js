const warningController = require('../controller/warningController')

module.exports = function (app) {
    app.get('/3out/warning', warningController.warningFriendList)
    app.post('/3out/warning/{friend-id}', warningController.warningFriendComment)
}