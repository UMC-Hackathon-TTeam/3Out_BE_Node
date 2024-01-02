const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const bcrypt = require("bcryptjs");
const customJWT = require('../../config/jwtModules');
const userService = require("../service/userService");
const userProvider = require("../provider/userProvider");

exports.signUp = async function (req, res) {
    const {email, password, name, nickname, promise} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const signUpResult = await userService.insertNewUser(email, hash, name, nickname, promise);

    return res.send(signUpResult);
};

exports.signIn = async function (req, res) {
    const {email, password} = req.body;

    const signInResult = await userService.login(email);
    const isPasswordCorrect = await bcrypt.compare(password, signInResult.password);

    if (isPasswordCorrect) {
        const accessToken = await customJWT.accessSign(signInResult);
        const refreshToken = await customJWT.refreshSign();
        await userService.updateRefreshToken(signInResult.id, refreshToken);

        return res.send(response(baseResponse.SUCCESS, { "nickname": signInResult.nickname, "accessToken": accessToken, "refreshToken": refreshToken}));
    } else {
        if (signInResult === null)
            return res.send(errResponse(baseResponse.USER_NOT_EXIST));
        else if (hash !== signInResult.password)
            return res.send(errResponse(baseResponse.PASSWORD_WRONG));
    }
};

exports.refresh = async function (req, res) {
    const refreshToken = req.body.refreshToken;
    const decode = await customJWT.refreshVerify(refreshToken, req.user_id);
    if (decode.valid) {
        const userInfo = await userProvider.getUserById(req.user_id);
        const accessToken = await customJWT.accessSign(userInfo); //atk 발급
        const newRefreshToken = await customJWT.refreshSign(); //rtk 발급
        await userService.updateRefreshToken(userInfo.id, newRefreshToken);

        return res.send(response(baseResponse.SUCCESS, { "nickname": userInfo.nickname, "accessToken": accessToken, "refreshToken": newRefreshToken}));
    } else {
        return res.send(errResponse(baseResponse.INVALID_TOKEN));
    }
}

exports.getProfile = async function (req, res) {
    try {
        const getProfileResult = await profileProvider.getProfile(req.user_id)
        return res.send(response(baseResponse.SUCCESS, getProfileResult))
    } catch (error) {
        return res.send(errResponse(baseResponse.DB_ERROR))
    }
}