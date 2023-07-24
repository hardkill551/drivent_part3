import hotelsRepository from "@/repositories/hotels-repository/hotels-repository"
import { NoPay, invalidId, notFoundError } from "./errors"
import { getTicketByUserId } from "../tickets-service"

async function getHotels(userId:number) {
    const hotels = await validTicket(userId)
    return hotels
}
async function getHotelsById(id:string, userId:number) {
    if(isNaN(Number(id))){
        throw invalidId()
    }
    
    const hotels = await hotelsRepository.getHotelsById(Number(id))
    await validTicket(userId)
    if(!hotels) throw notFoundError()
    return hotels
}
const hotelsService = {
    getHotels,
    getHotelsById

}

async function validTicket(userId:number){
    const hotels = await hotelsRepository.getHotels()
    const ticket = await getTicketByUserId(userId)
    if(hotels.length === 0) throw notFoundError()
    if(ticket.status === "RESERVED" || ticket.TicketType.isRemote === true || ticket.TicketType.includesHotel === false){
        throw NoPay()
    }
    return hotels
}
export default hotelsService