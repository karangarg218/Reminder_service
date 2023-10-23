const nodeMailer = require('nodemailer');
const {userId,password} = require('./serverConfig')
const sender = nodeMailer.createTransport(
    {
        service:'Gmail',
        auth:{ 
            user:userId,
            pass:password
        }
    }
)
module.exports=sender;