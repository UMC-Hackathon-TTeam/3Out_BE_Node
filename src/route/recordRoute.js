const recordCNT = require('../controller/recordController');

module.exports = function(app) {
    app.get('/3out/home/:friendId/:stickerId', recordCNT.getRecordsBySticker);
}