const express = require('express')
const compression = require('compression')
const methodOverride = require('method-override')
const cors = require('cors')
const { specs } = require('./swagger.config')
const SwaggerUi = require('swagger-ui-express')

// 환경 변수 불러오기 (예: dotenv 사용)
require('dotenv').config()

module.exports = function () {
    const app = express()

    // 압축 미들웨어 사용
    app.use(compression())

    // JSON과 URL 인코딩 처리
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // 메소드 오버라이드 (PUT, DELETE 등을 지원하기 위함)
    app.use(methodOverride())

    // CORS 설정
    app.use(cors())

    // Swagger 문서화 설정
    app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs))

    // 세션과 쿠키 파서 설정 (환경변수에서 비밀키 가져오기)
    // const cookieParser = require('cookie-parser');
    // const session = require('express-session');
    // const passport = require('passport');
    // const passportConfig = require('./passportConfig'); // 예시 경로

    // app.use(cookieParser())
    // app.use(session({
    //     secret: process.env.SESSION_SECRET,
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: {
    //         maxAge: 7 * 24 * 60 * 60 * 1000
    //     },
    //     rolling: true
    // }));
    // passportConfig(app);
    // app.use(passport.initialize());
    // app.use(passport.session());

    // 기본 라우트
    app.get('/', (req, res) => {
        console.log('루트 페이지로 접속하셨습니다.')
        res.send('Hi 3Out')
    })

    // 라우트 설정
    require('../src/route/testRoute')(app);
    require('../src/route/rankingRoute')(app);
    require('../src/route/friendRoute')(app);
    require('../src/route/testRoute')(app);
    require('../src/route/userRoute')(app);

    // 404 에러 핸들러
    app.use((req, res, next) => {
        res.status(404).send('Sorry, page not found')
    })

    // 기타 에러 핸들러
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })

    return app
}
