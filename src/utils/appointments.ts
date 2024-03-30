"use server"

import prisma from "../../db/db"

interface createAp{
    email : string
    firstName : string
    lastName : string
    password : string
    phoneNumber? : string
    time : string
    department : string
    note : string
    date :string
    doctor  : string
}
export const createAppointment = async(props:createAp)=>{
    const {email,firstName,lastName,password,phoneNumber,time,department,note,date,doctor} = props
    const user = await prisma.users.create({
        data : {
            email,
            password,
            firstName,
            lastName,
            phoneNumber
        },
        select : {
            id : true
        }
    })
    const appointment = await prisma.appointments.create({
        data : {
            time,
            date,
            department,
            doctor,
            note,
            userId : user.id
        },
        select : {
            time : true
        }
    })
    console.log(user , appointment)
}