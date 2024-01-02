const {response, errResponse} = require("../../config/response");
const baseResponse = require("../../config/baseResponseStatus");
const recordPRO = require("../provider/recordProvider");

exports.getRecordsBySticker = async function (req, res) {
    const {query} = req;
    const user_id = query.userId;
    const friend_id = query.friendId;
    const sticker_id = query.stickerId;

    console.log("스티커별 내용 조회 요청");

    const getRecordsByStickerResult = await recordPRO.getRecordsBySticker(user_id, friend_id, sticker_id);

    const formattedResults = getRecordsByStickerResult.map(record => ({
        description: record.description,
        created_at: record.created_at.toLocaleDateString('en-US', { 
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).split('/').reverse().join('.'), // '/'를 구분자로 사용해 나눈 후, 배열을 역순으로 나열하여 '.'로 다시 조합
        size: getRecordsByStickerResult.length
      }));
      
    console.log(formattedResults);

    return res.send(response(baseResponse.SUCCESS, formattedResults));
}