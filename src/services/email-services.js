const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticket-repository')
const repo = new TicketRepository()


const createNotification=async(data)=>{
    try{
        const response = await repo.create(data);
        return response;
    }catch(error){
        throw {error};
    }
}


const sendBasicEmail = async (mailfrom,mailto,mailSubject,mailBody)=>{
    const response=await sender.sendMail({
        from:mailfrom,
        to:mailto,
        subject:mailSubject,
        text:mailBody
    })
    return response;
}


const fetchPendingEmails = async (timestamp)=>{
    try{
        const response=await repo.get({status:"PENDING"});

        return response;
    }catch(error){

    }
}


const updateTicket = async(ticketId,data)=>{
    try{
        const response = await repo.update(ticketId,data);
        return response;
    }catch(error){
        console.log(error);
        throw {error}
    }
}
module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}