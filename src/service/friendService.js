const { pool } = require("../../config/database");
const friendDAO = require("../dao/friendDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.insertRecordToFriend = async function (user_id, friend_id, sticker_id, description) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const params = [user_id, friend_id, sticker_id, description];
        const paramsForSticker = [user_id, friend_id, sticker_id];

        const insertRecordToFriendResult = await friendDAO.insertRecordToFriend(connection, params);
        const insertFriendStickerResult = await friendDAO.insertFriendSticker(connection, paramsForSticker);
        connection.release();
        //에러 처리 안했음 (실패했을 경우)
        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`insertRecordToFriend Error:\n ${err.message}`);
        return errResponse(baseResponse.SERVER_ERROR);
    }
}