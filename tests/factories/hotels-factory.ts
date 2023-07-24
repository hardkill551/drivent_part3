import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
    const hotelData = {
        name: faker.company.companyName(),
        image: faker.image.imageUrl()
      };
    
      return prisma.hotel.create({
        data: hotelData
      });
}