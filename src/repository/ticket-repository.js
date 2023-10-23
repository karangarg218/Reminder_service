const {NotificationTicket} = require('../models/index')
const { Op } = require("sequelize");
class TicketRepository{

    async create(data){
        try{
            const ticket = await NotificationTicket.create(data); 
            return ticket;
        }catch(error){
            throw error;
        }
    }   
    
    async getAll(){
        try{
            const ticket = await NotificationTicket.findAll();
            return ticket;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async get(filter){
      
        try{
            console.log(filter.status)
            const ticket = await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            })

            return ticket;
        }catch(error){
            throw error;

        }
    }

    async update(ticket_id,data){
        try{
            console.log(ticket_id)
            const ticket = await NotificationTicket.findByPk(ticket_id);
            if(data.status){
            ticket.status = data.status
            }
            await ticket.save(); 
            return ticket;
        }catch(error){
            console.log(`error in repository layer`)
            throw {error}
        }
    }
}
module.exports = TicketRepository