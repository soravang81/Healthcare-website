"use server"
import prisma from '../../db/db'

export const getUsers = async ()=>{
    const res = await prisma.users.findMany({})
    return res;
}
interface createUser{
    email : string,
    password : string,
    firstName : string,
    lastName : string
}
export const createUser = async ( {email , password , firstName , lastName } : createUser)=>{
    const res = await prisma.users.create({
        data: {
            email,
            firstName,
            lastName
        },
        select:{
            email : true
        }
    })
    return res;
}
