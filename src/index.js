const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')

function setupAndStartService(){
    
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,async()=>{
        console.log(`server started on port ${PORT}`)
    })

}
setupAndStartService()