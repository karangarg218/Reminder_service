const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const {sendBasicEmail} = require('./services/email-services')
const jobs = require('./utils/job')
const db = require('./models/index')
const v1Routes = require('./routes/index')

function setupAndStartService(){
    
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',v1Routes)

    app.listen(PORT,async()=>{

        console.log(`server started on port ${PORT}`)
       
        jobs()
        // const response2 = await sendBasicEmail(
        //     'support@admin.com',
        //     'karangarg218@gmail.com',
        //     'this is a testing email from microservice',
        //     'i like to support you'
        // )
        // console.log(response1)
        // console.log(response2)
    })

}
setupAndStartService()