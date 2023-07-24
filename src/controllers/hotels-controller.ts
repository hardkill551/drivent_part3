import hotelsService from "@/services/hotels-service/hotels-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req:Request, res:Response) {
    const hotels = await hotelsService.getHotels(res.locals.userId)
    res.send(hotels).status(httpStatus.OK)
}

export async function getHotelsById(req:Request, res:Response) {
    const { hotelId } = req.params as Record<string, string>
    const hotel = await hotelsService.getHotelsById(hotelId, res.locals.userId)
    res.send(hotel).status(httpStatus.OK)
}