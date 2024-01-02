const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const warningService = require('../service/warningService')

exports.warningFriendList = async function (req, res) {
  try {
    const warningFriendListResult = await warningService.getWarningFriendList()

    return res.send(response(baseResponse.SUCCESS, warningFriendListResult))
  } catch (error) {
    // 에러 처리
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}

exports.warningFriendList = async function (req, res) {
  try {
    const warningCommentResult = await warningService.warningComment()

    return res.send(response(baseResponse.SUCCESS, warningCommentResult))
  } catch (error) {
    // 에러 처리
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}