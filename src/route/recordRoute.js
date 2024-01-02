const recordCNT = require('../controller/recordController');
const {authChecker} = require("../../config/jwtMiddleware");

module.exports = function(app) {
    app.get('/3out/record', authChecker, recordCNT.getRecordsBySticker);
}