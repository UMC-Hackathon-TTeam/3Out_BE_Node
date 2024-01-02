const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const friendService = require('../service/friendService')
const friendPRO = require("../provider/friendProvider")

exports.addNewFriend = async function (req, res) {
    // const userId = req.user_id
    const { nickname, relation, image } = req.body

    const addNewFriendResult = await friendService.addFriend(
        req.user_id,
        nickname,
        relation,
        image
    )
    
    return res.send(addNewFriendResult)
}

exports.getFriendsList = async function (req, res) {
    const userId = req.user_id;
    console.log("친구 목록 요청");

    const getFreindsInfoResult = await friendPRO.getFriendsList(userId);
    
    return res.send(response(baseResponse.SUCCESS, getFreindsInfoResult));
}

exports.getFriendInfo = async function (req, res) {
    const friend_id = req.params.friendId;

    console.log("특정 친구 정보 요청");

    const getFreindInfoResult = await friendPRO.getFriendInfo(req.user_id, friend_id);

    return res.send(response(baseResponse.SUCCESS, getFreindInfoResult))
}

exports.insertRecordToFriend = async function (req, res) {
    const {sticker_id, description} = req.body;
    const friend_id = req.params.friendId;

    const params = [req.user_id, friend_id, sticker_id, description];
    console.log(params);
    console.log("기록 추가 요청");

    const insertRecordToFriendResult = await friendService.insertRecordToFriend(req.user_id, friend_id, sticker_id, description);

    return res.send(insertRecordToFriendResult);
}