const cron = require('node-cron')
const emailService = require('../services/email-services')
const sender = require('../config/emailConfig')
const setupJobs= ()=>{
        cron.schedule('*/1 * * * *',async()=>
        {
            const response = await emailService.fetchPendingEmails();
            console.log(response)
            response.forEach((email) => {
           
               sender.sendMail({
                  
                    to:email.recepientEmail,
                    subject:email.subject,
                    text:email.content
                },async(err,data)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(data)
                        //console.log(email.id)
                        await emailService.updateTicket(email.id,{status:"SUCCESS"})
                    }

                })
            //  emailService.sendBasicEmail("ReminderService@airline.com",
            //  email.recepientEmail,
            //  email.subject,
            //  email.content
            //  )
            });
            console.log(response)
        })
}
module.exports =setupJobs;