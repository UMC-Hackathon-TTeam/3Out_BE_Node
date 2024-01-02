const { pool } = require("../../config/database");

const warningDao = require("../dao/warningDao");

exports.getFriendDetail = async function (userId, friendId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const params = [userId, friendId];
    const friendDetailResult = await warningDao.findFriendDetail(connection, params);
    console.log(friendDetailResult[0]);
    connection.release();
    return friendDetailResult[0];
}