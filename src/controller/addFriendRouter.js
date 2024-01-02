import { response } from '../../config/response.js'
import { status } from '../../config/baseResponseStatus.js'

import { addFriend } from '../services/addFriendService.js'

export const userSignin = async (req, res, next) => {
  console.log('친구 추가하기!')
  console.log('body:', req.body) // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await getRanking(req.body)))
}
