const { pool } = require("../../config/database");
const friendDAO = require("../dao/friendDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.getFriendsList = async function (user_id) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const getFriendsInfoResult = await friendDAO.getFriendsList(connection, user_id);
        console.log(getFriendsInfoResult[0]);
        connection.release();

        return getFriendsInfoResult[0];
    } catch (err) {
        console.log(`getFriendsInfo Error:\n ${err.message}`);
        return errResponse(baseResponse.SERVER_ERROR);
    }
}

exports.getFriendInfo = async function (user_id, friend_id) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const params = [user_id, friend_id];
        const params1 = [user_id, friend_id, 1];
        const params2 = [user_id, friend_id, 2];
        const params3 = [user_id, friend_id, 3];
        const params4 = [user_id, friend_id, 4];
        
        const getFriendInfoResult = await friendDAO.getFriendInfo(connection, params);
        const getStickerNum1 = await friendDAO.getStickerNum(connection, params1);
        const getStickerNum2 = await friendDAO.getStickerNum(connection, params2);
        const getStickerNum3 = await friendDAO.getStickerNum(connection, params3);
        const getStickerNum4 = await friendDAO.getStickerNum(connection, params4);
        connection.release();
        const totalNum = {"스티커 1번":getStickerNum1[0][0].sticker_count, "스티커 2번":getStickerNum2[0][0].sticker_count, "스티커 3번":getStickerNum3[0][0].sticker_count, "스티커 4번":getStickerNum4[0][0].sticker_count};
        const formatResult = [getFriendInfoResult[0][0], totalNum];
        console.log(formatResult);

        return formatResult;
    } catch (err) {
        console.log(`getFriendInfo Error:\n ${err.message}`);
        return errResponse(baseResponse.SERVER_ERROR);
    }
}