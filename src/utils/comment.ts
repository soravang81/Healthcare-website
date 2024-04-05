"use server"
import prisma from "../../db/db"

export const createFeedback = async(email : string ,comment : string , rating : number)=>{
    const user = await prisma.users.findUnique({
        where : {
            email
        },
        select : {
            id : true
        }
    })
    const res = await prisma.feedback.create({
        data : {
            comment,
            rating,
            user : {
                connect : {
                    id : user?.id
                }
            }
        },
        select : {
            id : true
        }
    })
    if(res){
        return true
    }
    else{
        return false
    }
}
export const getFeedback = async()=>{
    const res = await prisma.feedback.findMany({
        select : {
            id : true,
            comment : true,
            rating : true,
            createdAt : true,
            updatedAt : true,
            user : {
                select : {
                    firstName : true,
                    lastName : true
                }
            }
        }
    })
    return res;
}
export const updateFeedback = async(email : string ,comment : string)=>{
    const user = await prisma.users.findUnique({
        where : {
            email
        },
        select : {
            id : true
        }
    })
    const res = await prisma.feedback.update({
        where : {
            userId : user?.id
        },
        data : {
            comment
        },
        select : {
            id : true
        }
    })
    if(res){
        return true
    }
    else{
        return false
    }
}
export const deleteFeedback = async(email:string)=>{
    const user = await prisma.users.findUnique({
        where : {
            email
        },
        select : {
            id : true
        }
    })
    const res = await prisma.feedback.delete({
        where : {
            userId : user?.id
        },
        select : {
            id : true
        }
    })
    if(res){
        return true
    }
    else{
        return false
    }
}