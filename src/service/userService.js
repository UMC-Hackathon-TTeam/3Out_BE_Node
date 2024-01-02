const {pool} = require("../../config/database");
const userDao = require("../dao/userDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.insertNewUser = async function (email, password, nickname, promise) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const newUserParams = [email, password, nickname, promise];
        const insertNewUserResult = await userDao.insertNewUser(connection, newUserParams);
        console.log(insertNewUserResult);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - insertNewUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.login = async function (email) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const loginResult = await userDao.findUserByIdPwd(connection, email);
        connection.release();

        return loginResult[0];
    } catch (err) {
        console.log(`App - login Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.updateRefreshToken = async function (id, refreshToken) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const updateRefreshTokenResult = await userDao.updateRefreshToken(connection, id, refreshToken);
        console.log(updateRefreshTokenResult);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - update refrestToken error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}