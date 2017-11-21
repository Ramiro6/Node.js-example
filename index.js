'use strict'
const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')
const url = require('./config')
const router = require('./routers/items')
const auth = require('./routers/auth')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const passport = require('passport')
const config = require('./config')
const app = express()
const path = require('path')
const http = require('http');
const server = http.createServer(app);

app.use(body.urlencoded({ extended: true }))
app.use(body.json())
// app.use(cookieParser())
// app.use(expressSession({
//     secret: config.secret,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())


const port = process.env.PORT || 3000

// if ( port === 'development' || 3000 ) {
//     console.log(port)
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATH, DELETE, OPTIONS')
        next()
    })
// }

app.use(express.static(__dirname + 'client/dist'));

// app.use(express.static(path.join(process.cwd(), '/dist')))


app.use('/api', router.app)
app.use('/api', auth.app)


async function Start() {
    mongoose.Promise = global.Promise;
    await mongoose.connect(url.URLDATABASE, { useMongoClient: true })
    console.log('DATABASE ON!!')
    app.listen(port, () => {
        console.log(`API RES ON ${port}`)
    })
}

Start()