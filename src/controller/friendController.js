const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const friendService = require('../service/friendService')
const friendPRO = require("../provider/friendProvider")

exports.addNewFriend = async function (req, res) {
    // const userId = req.user_id
    const { nickname, relation } = req.body

    const addNewFriendResult = await friendService.addFriend(
        req.user_id,
        nickname,
        relation
    )
    
    return res.send(addNewFriendResult)
}

exports.getFriendsInfo = async function (req, res) {
    const {query} = req;

    const id = query.userId;
    console.log("친구 목록 요청");

    const getFreindsInfoResult = await friendPRO.getFriendsInfo(id);
    
    return res.send(response(baseResponse.SUCCESS, getFreindsInfoResult));
}

exports.getFriendInfo = async function (req, res) {
    const {query} = req;
    const friend_id = req.params.friendId;
    const id = query.userId;

    console.log("특정 친구 정보 요청");

    const getFreindInfoResult = await friendPRO.getFriendInfo(id, friend_id);

    return res.send(response(baseResponse.SUCCESS, getFreindInfoResult))
}

exports.insertRecordToFriend = async function (req, res) {
    const {user_id, sticker_id, description} = req.body;
    const friend_id = req.params.friendId;

    const params = [user_id, friend_id, sticker_id, description];
    console.log(params);
    console.log("기록 추가 요청");

    const insertRecordToFriendResult = await friendService.insertRecordToFriend(user_id, friend_id, sticker_id, description);

    return res.send(insertRecordToFriendResult);
}