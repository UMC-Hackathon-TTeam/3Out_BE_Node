const { pool } = require('../../config/database')
const friendDao = require('../dao/friendDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

exports.addFriend = async function (nickname, relation, favor) {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const newFriendParams = [nickname, relation, favor]
    const addFriendResult = await friendDao.addFriend(
      connection,
      newFriendParams
    )
    console.log(addFriendResult)
    connection.release()

    return response(baseResponse.SUCCESS)
  } catch (err) {
    console.log(`App - addFriend Service error\n: ${err.message}`)
    return errResponse(baseResponse.DB_ERROR)
  }
}