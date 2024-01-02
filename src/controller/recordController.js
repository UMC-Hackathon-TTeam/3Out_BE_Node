const {response, errResponse} = require("../../config/response");
const baseResponse = require("../../config/baseResponseStatus");
const recordPRO = require("../provider/recordProvider");

exports.getRecordsBySticker = async function (req, res) {
    const {friendId, stickerId} = req.query;

    console.log("스티커별 내용 조회 요청");

    const getRecordsByStickerResult = await recordPRO.getRecordsBySticker(req.user_id, friendId, stickerId);
    console.log(getRecordsByStickerResult);
    const formattedResults = getRecordsByStickerResult.map(record => {
      const date = new Date(record.created_at);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 한 자리 월도 두 자리로 표시
      const day = date.getDate().toString().padStart(2, '0'); // 한 자리 일도 두 자리로 표시
  
      return {
          description: record.description,
          created_at: `${year}.${month}.${day}`,
          size: getRecordsByStickerResult.length
      };
  });
      
    console.log(formattedResults);

    return res.send(response(baseResponse.SUCCESS, formattedResults));
}