// import express from 'express';
// import { friendRankings } from '../controller/rankingController.js';

// export const rankingRouter = express.Router();

// rankingRouter.get('/ranking', friendRankings);

const rankingController = require('../controller/rankingController')

module.exports = function (app) {
    // app.get('/3out/home/ranking/touching', rankingController.touchingRankings)
    // app.get('/3out/home/ranking/happy', rankingController.happyRankings)
    // app.get('/3out/home/ranking/sad', rankingController.sadRankings)
    // app.get('/3out/home/ranking/disappointing', rankingController.disappointingRankings)

    app.get('/3out/home/ranking', rankingController.rankings)
}