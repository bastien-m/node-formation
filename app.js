const express = require('express')
const app = express()
const config = require('config')



app.listen(config.get('server.port'), () => {
    console.log(`server listening on port ${config.get('server.port')}`)
})
