// import express from 'express'
// import { addFriends } from '../controller/rankingController.js'

// export const addFriendRouter = express.Router()

// addFriendRouter.post('/add', addFriends)

const friendController = require('../controller/friendController')

module.exports = function (app) {
    app.post('/3out/home/add', friendController.addNewFriend);
}