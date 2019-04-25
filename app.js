const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('config')

const app = express()

app.use(morgan('tiny'))

app.use(bodyParser.json())

require('./models')(app)
require('./services')(app)
require('./controllers')(app)

require('./routes')(app)

app.use((err, req, res, next) => {
    if (err) {
        const err = new app.models.applicationError(3, 'Internal error', console.trace())
        res.status(500).json({
            err
        })
    } else {
        next()
    }
})

app.listen(config.get('server.port'), () => {
    console.log(`server listening on port ${config.get('server.port')}`)
})
