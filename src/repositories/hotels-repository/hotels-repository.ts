import { prisma } from "@/config"

async function getHotels() {
    return await prisma.hotel.findMany({})
}
async function getHotelsById(id:number) {
    return await prisma.hotel.findUnique({
        where: {
            id
        },
        include:{
            Rooms:true
        }
    })
}
const hotelsRepository = {
    getHotels,
    getHotelsById
}

export default hotelsRepository