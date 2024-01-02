const {pool} = require("../../config/database");
const userDao = require("../dao/userDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.insertNewUser = async function (login_id, password, email, name, nickname, promise) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const newUserParams = [login_id, password, email, name, nickname, promise];
        const insertNewUserResult = await userDao.insertNewUser(connection, newUserParams);
        console.log(insertNewUserResult);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - insertNewUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.login = async function (login_id, password) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const loginResult = await userDao.findUserByIdPwd(connection, login_id, password);
        console.log(loginResult);
        connection.release();

        if (loginResult) {
            return loginResult[0];
        } else {
            return null;
        }
    } catch (err) {
        console.log(`App - login Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};