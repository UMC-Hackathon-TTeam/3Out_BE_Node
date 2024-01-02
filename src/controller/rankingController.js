const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const rankingProvider = require('../provider/rankingProvider')

exports.rankings = async function (req, res) {
  try {
    const touchingRankingsResult = await rankingProvider.getTouchingRankings(req.user_id, 1);
    const happyRankingsResult = await rankingProvider.getHappyRankings(req.user_id, 2);
    const sadRankingsResult = await rankingProvider.getSadRankings(req.user_id, 3);
    const disappointingRankingsResult = await rankingProvider.getDisappointingRankings(req.user_id, 4);

    const allRankingResults = {
      touchingRankings: touchingRankingsResult,
      happyRankings: happyRankingsResult,
      sadRankings: sadRankingsResult,
      disappointingRankings: disappointingRankingsResult,
    }

    return res.send(response(baseResponse.SUCCESS, allRankingResults));
  } catch (error) {
    // 에러 처리
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}