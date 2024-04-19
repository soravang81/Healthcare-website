"use server"
import prisma from '../../db/db'

export const getUsers = async ()=>{
    const res = await prisma.users.findMany({})
    return res;
}
export interface VerifyUser {
    email?: string;
    password?: string;
}
export const verifyUsers = async ({email , password}:VerifyUser)=>{
    const res = await prisma.users.findFirst({
        where : {
            email,
            password
        },
        select: {
            id : true,
            email : true,
            password : true
        }
    })
    if(res){
        return res
    }
    else{
        return false
    }
}
export interface createUser{
    email : string,
    password : string,
    name : string
}
export const createUser = async ( {email , password , name } : createUser)=>{
    const res = await prisma.users.create({
        data: {
            email,
            password,
            name
        },
        select:{
            id : true,
            email : true,
        }
    })
    if(res){
        return res
    }
    else{
        return false;
    }
}
