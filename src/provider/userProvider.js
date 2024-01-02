const { pool } = require("../../config/database");

const userDao = require("../dao/userDao");

exports.getUserById = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const findUserResult = await userDao.findUserById(connection, userId);
    connection.release();
    return findUserResult[0];
}

exports.getRefreshToken = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const findRefreshTokenResult = await userDao.findRefreshTokenById(connection, userId);
    connection.release();
    return findRefreshTokenResult[0];
}