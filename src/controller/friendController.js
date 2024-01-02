const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const friendService = require('../service/friendService')

exports.addNewFriend = async function (req, res) {
    const { nickname, relation, favor } = req.body

    const addNewFriendResult = await friendService.addFriend(
        req.user_id,
        nickname,
        relation,
        favor
    )
    
    return res.send(addNewFriendResult)
}