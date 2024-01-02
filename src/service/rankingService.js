const { pool } = require('../../config/database')
const rankingDao = require('../dao/rankingDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

async function getRankingsByStickerId(stickerId) {
    try {
        const connection = await pool.getConnection(async (conn) => conn)

        const rankingResult = await rankingDao.getRankingsByStickerId(
        connection,
        stickerId
        )
        connection.release()

        return response(baseResponse.SUCCESS, rankingResult)
    } catch (err) {
        console.log(`App - getRankingsByStickerId Service error\n: ${err.message}`)
        return errResponse(baseResponse.DB_ERROR)
    }
}

exports.getTouchingRankings = async function () {
    return await getRankingsByStickerId(1)
}

exports.getHappyRankings = async function () {
    return await getRankingsByStickerId(2)
}

exports.getSadRankings = async function () {
    return await getRankingsByStickerId(3)
}

exports.getDisappointingRankings = async function () {
    return await getRankingsByStickerId(4)
}
