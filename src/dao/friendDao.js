async function getFriendsInfo(connection, id) {
    const getFriendsInfoSQL = `SELECT nickname, relation FROM friend WHERE user_id = ?;`;
    return await connection.query(getFriendsInfoSQL, id);
}

async function getFriendInfo(connection, params) {
    const getFriendInfoSQL = `SELECT nickname, relation FROM friend WHERE user_id = ? AND id = ?;`;
    return await connection.query(getFriendInfoSQL, params);
}

async function getStickerNum(connection, params) {
    const getStickerNumSQL = `SELECT COUNT(*) AS sticker_count FROM friend_sticker WHERE user_id = ? AND friend_id = ? AND sticker_id = ?;`;
    return await connection.query(getStickerNumSQL, params);
}

async function insertRecordToFriend(connection, params) {
    const insertRecordToFriendSQL = `INSERT INTO record (user_id, friend_id, sticker_id, description) VALUES (?, ?, ?, ?);`;
    
    const insertRecordToFriendSQLResult = await connection.query(insertRecordToFriendSQL, params);
    return insertRecordToFriendSQLResult;
}

async function insertFriendSticker(connection, paramsForSticker) {
    const insertFriendStickerSQL = `INSERT INTO friend_sticker (user_id, friend_id, sticker_id) VALUES (?, ?, ?);`;

    const insertFriendStickerSQLResult = await connection.query(insertFriendStickerSQL, paramsForSticker);
    return insertFriendStickerSQLResult;
}

module.exports = {
    getFriendsInfo, getFriendInfo, insertRecordToFriend, insertFriendSticker, getStickerNum
};