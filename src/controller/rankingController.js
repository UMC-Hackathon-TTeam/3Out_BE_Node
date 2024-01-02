const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const rankingService = require('../service/rankingService')

exports.rankings = async function (req, res) {
  try {
    const touchingRankingsResult = await rankingService.getTouchingRankings()
    const happyRankingsResult = await rankingService.getHappyRankings()
    const sadRankingsResult = await rankingService.getSadRankings()
    const disappointingRankingsResult = await rankingService.getDisappointingRankings()

    const allRankingResults = {
      touchingRankings: touchingRankingsResult,
      happyRankings: happyRankingsResult,
      sadRankings: sadRankingsResult,
      disappointingRankings: disappointingRankingsResult,
    }

    return res.send(response(baseResponse.SUCCESS, allRankingResults))
  } catch (error) {
    // 에러 처리
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}