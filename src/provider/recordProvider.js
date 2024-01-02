const { pool } = require("../../config/database");
const recordDAO = require("../dao/recordDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.getRecordsBySticker = async function (user_id, friend_id, sticker_id) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const params = [user_id, friend_id, sticker_id];
        const getRecordsByStickerResult = await recordDAO.getRecordsBySticker(connection, params);
        console.log(getRecordsByStickerResult[0]);
        connection.release();

        return getRecordsByStickerResult[0];
    } catch (err) {
        console.log(`getRecordsBySticker Error:\n ${err.message}`);
        return errResponse(baseResponse.SERVER_ERROR);
    }
}