const rankingController = require('../controller/rankingController')

module.exports = function (app) {
    app.get('/3out/home/ranking', rankingController.rankings)
}