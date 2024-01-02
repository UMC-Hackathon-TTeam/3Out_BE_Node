// index.js
import { specs } from './config/swagger.config.js'
import SwaggerUi from 'swagger-ui-express'

// (...)
app.use('/user', userRouter)

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs))

const express = require('./config/express')
const port = 3000
const app = express()

app.listen(port, () => {
    console.log('Server is running on HTTP at port', port)
})
