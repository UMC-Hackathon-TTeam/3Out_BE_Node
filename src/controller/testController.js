const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const testProvider = require("../provider/testProvider");

exports.dbTest = async function (req, res) {
    //const user_id = req.user.user_id;
    const testId = req.query.id;
    console.log(testId);

    const testResult = await testProvider.test(testId);

    return res.send(response(baseResponse.SUCCESS, testResult));
};