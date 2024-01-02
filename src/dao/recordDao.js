async function getRecordsBySticker(connection, params) {
    const getRecordsByStickerSQL = `SELECT description, created_at FROM record WHERE user_id = ? AND friend_id = ? AND sticker_id = ?;`;
    return await connection.query(getRecordsByStickerSQL, params);
}

module.exports = {
    getRecordsBySticker
};