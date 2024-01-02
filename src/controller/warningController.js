const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const warningService = require('../service/warningService')
const warningProvider = require('../provider/warningProvider');
const userService = require("../service/userService");

exports.warningFriendList = async function (req, res) {
  try {
    const warningFriendListResult = await warningService.getWarningFriendList(req.user_id);
    return res.send(response(baseResponse.SUCCESS, warningFriendListResult))
  } catch (error) {
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}

exports.warningFriendDetail = async function (req, res) {
  const friend_id = req.query.friend_id;

  const friendDetailResult = await warningProvider.getFriendDetail(req.user_id, friend_id);

  return res.send(response(baseResponse.SUCCESS, friendDetailResult[0]));
}

exports.warningFriendComment = async function (req, res) {
  const { friend_id, p_comment, if_comment } = req.body

  const commentResult = await warningService.addWarningComment(friend_id, p_comment, if_comment);

  return res.send(commentResult);
}