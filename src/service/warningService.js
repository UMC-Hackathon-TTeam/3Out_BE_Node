const { pool } = require('../../config/database')
const warningDao = require('../dao/warningDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

exports.getWarningFriendList = async function (userId) {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const getWarningFriendListResult = await warningDao.getWarningFriendList(connection, userId);
    console.log(getWarningFriendListResult[0])
    connection.release()

    return getWarningFriendListResult[0];
  } catch (err) {
    console.log(`App - getWarningFriendList Service error\n: ${err.message}`)
    return errResponse(baseResponse.DB_ERROR)
  }
}

exports.addWarningComment = async function (friend_id, p_comment, if_comment) {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const warningCommentParams = [friend_id, p_comment, if_comment]
    const addWarningCommentResult = await warningDao.addWarningComment(
      connection,
      warningCommentParams
    )
    console.log(addWarningCommentResult)
    connection.release()

    return response(baseResponse.SUCCESS)
  } catch (err) {
    console.log(`App - addWarningComment Service error\n: ${err.message}`)
    return errResponse(baseResponse.DB_ERROR)
  }
}