import { ApplicationError } from "@/protocols";

export function invalidId(): ApplicationError{
    return {
        message: "Insert a valid ID",
        name:"Invalid ID"
    }
}

export function NoPay(): ApplicationError{
    return {
        name: "No Paid",
        message: "Pay the ticket"
    }
}