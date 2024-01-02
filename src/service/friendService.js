const { pool } = require('../../config/database')
const friendDao = require('../dao/friendDao')
const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')

exports.addFriend = async function (userId, nickname, relation, image ) {
  try {
    const connection = await pool.getConnection(async (conn) => conn)

    const newFriendParams = [userId, nickname, relation, image ]
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

exports.insertRecordToFriend = async function (user_id, friend_id, sticker_id, description) {
  try {
      const connection = await pool.getConnection(async (conn) => conn);
      const params = [user_id, friend_id, sticker_id, description];
      const paramsForSticker = [user_id, friend_id, sticker_id];

      const insertRecordToFriendResult = await friendDao.insertRecordToFriend(connection, params);
      const insertFriendStickerResult = await friendDao.insertFriendSticker(connection, paramsForSticker);
      connection.release();
      //에러 처리 안했음 (실패했을 경우)
      return response(baseResponse.SUCCESS);
  } catch (err) {
      console.log(`insertRecordToFriend Error:\n ${err.message}`);
      return errResponse(baseResponse.SERVER_ERROR);
  }
}