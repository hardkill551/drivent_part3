import hotelsRepository from "@/repositories/hotels-repository/hotels-repository"
import { NoPay, invalidId } from "./errors"
import { getTicketByUserId } from "../tickets-service"

async function getHotels(userId:number) {
    await validTicket(userId)
    return await hotelsRepository.getHotels()
}
async function getHotelsById(id:string, userId:number) {
    if(isNaN(Number(id))){
        throw invalidId()
    }
    await validTicket(userId)
    return await hotelsRepository.getHotelsById(Number(id))
}
const hotelsService = {
    getHotels,
    getHotelsById

}

async function validTicket(userId:number){
    const ticket = await getTicketByUserId(userId)
    if(ticket.status === "RESERVED" || ticket.TicketType.isRemote === true || ticket.TicketType.includesHotel === false){
        throw NoPay()
    }
    return
}
export default hotelsService