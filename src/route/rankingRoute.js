const {authChecker} = require("../../config/jwtMiddleware");
const rankingController = require('../controller/rankingController')

module.exports = function (app) {
    app.get('/3out/home/rankings', authChecker, rankingController.rankings);
}