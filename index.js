const express = require('express')
const cors = require('cors')
const createCheckoutSession = require('./api/checkout')

if (proccess.env.NODE_ENV === 'development') {
    require('dotenv').config({path: './.env'})
}

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (req, res) => res.send('Hello Express'))

app.post('/create-checkout-session', createCheckoutSession)

app.listen(port, () => console.log(`server listening on port: ${port}`))