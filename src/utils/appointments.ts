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
    const doctor = await prisma.doctors.findFirst({
        where :{
            field : department||undefined
        },
        select:{
            name:true
        }
    })
    if(doctor){
        const user = await prisma.users.findFirst({
            where : {
                email
            },
            select : {
                id : true
            }
        })
        if(user){
            const appointment = await prisma.appointments.create({
                data : {
                    time,
                    date,
                    department,
                    doctor : doctor?.name,
                    note,
                    userId : user.id,
                },
                select : {
                    time : true
                }
            })
            return true
        }
        else{
            const create = await prisma.users.create({
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
                    userId : create.id,
                },
                select : {
                    time : true
                }
            })
        }
        return true
    }
    
}

export const getAppointments = async ( email : string)=>{
    const res = await prisma.appointments.findFirst({
        where : {
            user : {
                email
            }
        },
        select : {
            time : true,
            doctor : true,
            date : true,
            department : true
        }
    })
    return res
}
export const deleteAppointment = async( email : string)=>{
    const user = await prisma.users.delete({
        where : {
            email
        },
        select : {
            id : true
        }
    })
    if(user){
        return true
    }
    else{
        return false
    }
}
export const updateAppointment = async( email : string , date : string)=>{
    const user = await prisma.users.findUnique({
        where : {
            email
        },
        select : {
            id : true
        }
    })
    const res = await prisma.appointments.update({
        where : {
            userId : user?.id
        },
        data : {
            date
        },
        select : {
            userId : true
        }
    })
    if(res){
        return true
    }
    else{
        return false
    }
}
