const { pool } = require("../../config/database");

const testDao = require("../dao/testDao");

exports.test = async function (testId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const testResult = await testDao.testDB(connection, testId);
    connection.release();

    return testResult;
}