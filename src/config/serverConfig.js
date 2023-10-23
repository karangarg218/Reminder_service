const dotEnv = require('dotenv')

dotEnv.config()
module.exports={
    PORT : process.env.PORT,
    userId:process.env.EMAIL_ID,
    password:process.env.EMAIL_PASSWORD
}