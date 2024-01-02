// import { response } from '../../config/response.js'
// import { status } from '../../config/baseResponseStatus.js'

// import { getRanking } from '../services/rankingService.js'

// export const userSignin = async (req, res, next) => {
//   console.log('친구 랭킹 출력하기!')
//   console.log('body:', req.body) // 값이 잘 들어오나 찍어보기 위한 테스트용

//   res.send(response(status.SUCCESS, await getRanking(req.body)))
// }

const baseResponse = require('../../config/baseResponseStatus')
const { response, errResponse } = require('../../config/response')
const rankingService = require('../service/rankingService')

exports.touchingRankings = async function (req, res) {
    try {
        const rankingResult = await rankingService.getTouchingRankings()
        return res.send(response(baseResponse.SUCCESS, rankingResult))
    } catch (error) {
        return res.send(errResponse(baseResponse.DB_ERROR))
    }
}

exports.happyRankings = async function (req, res) {
    try {
        const rankingResult = await rankingService.getHappyRankings()
        return res.send(response(baseResponse.SUCCESS, rankingResult))
    } catch (error) {
        return res.send(errResponse(baseResponse.DB_ERROR))
    }
}

exports.sadRankings = async function (req, res) {
  try {
    const rankingResult = await rankingService.getSadRankings()
    return res.send(response(baseResponse.SUCCESS, rankingResult))
  } catch (error) {
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}

exports.disappointingRankings = async function (req, res) {
  try {
    const rankingResult = await rankingService.getDisappointingRankings()
    return res.send(response(baseResponse.SUCCESS, rankingResult))
  } catch (error) {
    return res.send(errResponse(baseResponse.DB_ERROR))
  }
}