const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const friendService = require('../service/friendService')

exports.addNewFriend = async function (req, res) {
    const userId = req.user_id
    const { nickname, relation, favor } = req.body

    const addNewFriendResult = await friendService.addFriend(
        userId,
        nickname,
        relation,
        favor
    )
    
    return res.send(addNewFriendResult)
}