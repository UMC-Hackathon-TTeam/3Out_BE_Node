const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {request} = require("express");
dotenv.config();
const secret = process.env.JWT_SECRET;
const userProvider = require("../src/provider/userProvider");

module.exports = {
    accessSign: async (user) => { //accessToken 발급
        const payload = {
            id: user.id,
        };
        return jwt.sign(payload, secret, {algorithm: 'HS256', expiresIn: '30m'});
    },

    accessVerify: async (token) => {
        let decode = null;
        try {
            decode = jwt.verify(token, secret);
            return {
                valid: true,
                id: decode.id,
                nickname: decode.nickname,
                email: decode.email,
                provider: decode.provider
            }
        } catch (err) {
            return {
                valid: false,
                name: err.name,
                message: err.message
            }
        }
    },

    refreshSign: async () => { //refreshToken 발급
        return jwt.sign({}, secret, {algorithm: 'HS256', expiresIn: '1m'});
    },

    refreshVerify: async (token, userId) => { //DB에 있는 값과 같은지 확인
        let result = await userProvider.getRefreshToken(userId);
        let dbRefresh = result.refresh_token;
        let decode = null;
        try {
            if (dbRefresh === token) { //db 속 토큰과 같은지
                try {
                    decode = jwt.verify(token, secret);
                    return {
                        valid: true,
                        expiredIn: decode.exp //남은 시간
                    }
                } catch (err) {
                    return {
                        valid: false,
                        name: err.name,
                        message: err.message
                    }
                }
            } else {
                return {
                    valid: false,
                    message: 'wrong token'
                }
            }
        } catch (err) {
            return {
                valid: false,
                name: err.name,
                message: err.message
            }
        }
    }
}