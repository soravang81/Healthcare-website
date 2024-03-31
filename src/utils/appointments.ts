"use server"

import prisma from "../../db/db"

interface createAp{
    email : string
    firstName : string
    lastName : string
    phoneNumber? : string
    department : string
    note : string
    date :string
}
export const createAppointment = async(props:createAp)=>{
    const {email,firstName,lastName,phoneNumber,department,note,date} = props
    const randomHour = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
    const hour = randomHour > 12 ? randomHour - 12 : randomHour;
    const ampm = randomHour >= 12 ? 'pm' : 'am';
    const time = `${hour} ${ampm}`;
    console.log(department)
    const doctor = await prisma.doctors.findFirst({
        where :{
            field : department||undefined
        },
        select:{
            name:true
        }
    })
    if(doctor){
        const user = await prisma.users.create({
            data : {
                email,
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
                doctor : doctor?.name,
                note,
                userId : user.id
            },
            select : {
                time : true
            }
        })
        return [user , appointment]
    }
    
}