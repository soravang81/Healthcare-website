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
    // console.log(email, password)
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
    // console.log(res)
    if(res){
        return res
    }
    else{
        return false
    }
}
interface createUser{
    email : string,
    password : string,
    name : string
}
export const createUser = async ( {email , password , name } : createUser)=>{
    // console.log(
    //     email,
    //     password,
    //     name)
    const res = await prisma.users.create({
        data: {
            email,
            password,
            name
        },
        select:{
            email : true
        }
    })
    if(res){
        return true
    }
    else{
        return false;
    }
}
