const TicketService  = require('../services/email-services')

const create=async(req,res)=>{
    try{
        const response= await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{

            },
            message:'successfully registered an email reminder'
        })
    }catch(error){
        return res.status(500).json({
            success:true,
            data:{},
            err:{
                error
            },
            message:'unable to  registered an email reminder'
        })
    }
}
module.exports ={
    create
}

