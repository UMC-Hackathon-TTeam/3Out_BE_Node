const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const bcrypt = require("bcryptjs");
const customJWT = require('../../config/jwtModules');
const userService = require("../service/userService");

exports.signUp = async function (req, res) {
    const {login_id, password, email, name, nickname, promise} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const signUpResult = await userService.insertNewUser(login_id, hash, email, name, nickname, promise);

    return res.send(signUpResult);
};

exports.signIn = async function (req, res) {
    const {login_id, password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const signInResult = await userService.login(login_id, hash);
    if (signInResult === null) { //회원 정보가 없을 경우
        return res.send(errResponse(baseResponse.USER_NOT_EXIST));
    } else {
        const accessToken = await customJWT.accessSign();
        const refreshToken = await customJWT.refreshSign();
        await userService.updateRefreshToken(signInResult.id, refreshToken);

        return res.send(response(baseResponse.SUCCESS, { "accessToken": accessToken, "refreshToken": refreshToken}))
    }
};