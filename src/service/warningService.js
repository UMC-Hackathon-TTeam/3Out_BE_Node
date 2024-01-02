const { pool } = require('../../config/database')
const warningDao = require('../dao/warningDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

exports.getWarningFriendList = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const getWarningFriendListResult = await warningDao.getWarningFriendList(connection)
    console.log(getWarningFriendListResult)
    connection.release()

    return response(baseResponse.SUCCESS)
  } catch (err) {
    console.log(`App - addFriend Service error\n: ${err.message}`)
    return errResponse(baseResponse.DB_ERROR)
  }
}

exports.addWarningComment = async function (friend_id, comment) {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const warningCommentParams = [friend_id, comment]
    const addWarningCommentResult = await warningDao.addWarningComment(
      connection,
      warningCommentParams
    )
    console.log(addWarningCommentResult)
    connection.release()

    return response(baseResponse.SUCCESS)
  } catch (err) {
    console.log(`App - addFriend Service error\n: ${err.message}`)
    return errResponse(baseResponse.DB_ERROR)
  }
}