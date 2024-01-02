const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const friendService = require('../service/friendService')

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