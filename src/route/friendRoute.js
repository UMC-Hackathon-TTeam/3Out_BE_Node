const friendCNT = require('../controller/friendController');

module.exports = function(app) {
    app.get('/3out/home', friendCNT.getFriendsInfo);
    app.get('/3out/home/:friendId', friendCNT.getFriendInfo);
    app.post('/3out/home/:friendId/records', friendCNT.insertRecordToFriend);
}