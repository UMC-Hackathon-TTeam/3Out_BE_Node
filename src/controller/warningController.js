const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const warningService = require('../service/warningService')

exports.warningFriendList = async function (req, res) {
  try {
    const warningFriendListResult = await warningService.getWarningFriendList()
    return res.send(response(baseResponse.SUCCESS, warningFriendListResult))
  } catch (error) {
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}

exports.warningFriendComment = async function (req, res) {
  const { p_comment, if_comment } = req.body

  try {
    const warningCommentResult = await warningService.addWarningComment(p_comment, if_comment)
    return res.send(response(baseResponse.SUCCESS, warningCommentResult))
  } catch (error) {
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}