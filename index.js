// index.js
// import { specs } from './config/swagger.config.js'
// import SwaggerUi from 'swagger-ui-express'
// // import { rankingRouter } from './src/route/rankingRoute.js'

// (...)
// app.use('/home', rankingRouter)
// app.use('/home', addFriendRouter)


const express = require('./config/express')
const port = 3000
const app = express()

app.listen(port, () => {
    console.log('Server is running on HTTP at port', port)
})