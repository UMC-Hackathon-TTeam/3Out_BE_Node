const { pool } = require('../../config/database')
const rankingDao = require('../dao/rankingDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

async function getRankingsByStickerId(userId, stickerId) {
    try {
        const connection = await pool.getConnection(async (conn) => conn)
        const rankingResult = await rankingDao.getRankingsByStickerId(
            connection,
            userId,
            stickerId
        )
        connection.release()

        return rankingResult;
    } catch (err) {
        console.log(`App - getRankingsByStickerId Service error\n: ${err.message}`)
        return errResponse(baseResponse.DB_ERROR)
    }
}

exports.getTouchingRankings = async function (userId, stickerId) {
    return await getRankingsByStickerId(userId, stickerId)
}

exports.getHappyRankings = async function (userId, stickerId) {
    return await getRankingsByStickerId(userId, stickerId)
}

exports.getSadRankings = async function (userId, stickerId) {
    return await getRankingsByStickerId(userId, stickerId)
}

exports.getDisappointingRankings = async function (userId, stickerId) {
    return await getRankingsByStickerId(userId, stickerId)
}
