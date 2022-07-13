const { provider_router } = require('./Routes/provider_routes')
const { authMiddleware } = require('./middleware/authMiddleware')
const { user_router } = require('./Routes/user_routes')
const { sequelize } = require('./Data/models/index')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(user_router)

app.use(authMiddleware, provider_router)

//Catch exceptions so that app doesn't crash
// process.on('uncaughtException', (err) => {
//     console.error(err && err.stack)
// })

const start = async () => {
    try {
        await sequelize.sync({ force: true })
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
