const { authMiddleware } = require('./middleware/authMiddleware')
const { provider_router } = require('./Routes/provider_routes')
const { user_router } = require('./Routes/user_routes')
const { sequelize } = require('./Data/models/index')
const bodyParser = require('body-parser')
const express = require('express')
const { creme_create_router } = require('./Routes/Create_Entries/create_creme')
const { muss_create_router } = require('./Routes/Create_Entries/create_muss')
const {
    tropical_create_router,
} = require('./Routes/Create_Entries/create_tropical')
const { client_router } = require('./Routes/Client_Routes/client_routes')
const app = express()
const cors = require('cors')
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(user_router)

app.use(
    authMiddleware,
    provider_router,
    creme_create_router,
    muss_create_router,
    client_router,
    tropical_create_router
)

//Catch exceptions, in development, so that app doesn't crash
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
