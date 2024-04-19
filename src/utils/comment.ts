"use server"
import { getServerSession } from "next-auth"
import prisma from "../../db/db"

export const createFeedback = async(email : string ,comment :string , rating : number)=>{
    // const session = await getServerSession()
    // const email = session?.user?.email
    if(email){
        const user = await prisma.users.findUnique({
            where : {
                email
            },
            select : {
                id : true
            }
        })
        if(user == null){
            return false
        }
        else{
            try{
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
            catch{
                return false
            }
        }
        
    }
}
export const getUserFeedback = async(email:string)=>{
    // const session = await getServerSession()
    // const email = session?.user?.email
    if(email){
        const user = await prisma.users.findFirst({where : {email},select : {id : true}})
        const res = await prisma.feedback.findFirst({
            where : {
                userId : user?.id
            },
            select : {
                id : true,
                comment : true,
                rating : true,
                createdAt : true,
                updatedAt : true,
                user : {
                    select : {
                        name : true
                    }
                }
            }
        })
        if(res){
            return res
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}
export const getFeedback = async (email:string)=>{
    // const session = await getServerSession()
    // const email = session?.user?.email
    if(email){
        const user = await prisma.users.findUnique({where : {email},select:{id:true}})
        const res = await prisma.feedback.findMany({
            where : {
                NOT : {
                    userId : user?.id
                }
            },
            select : {
                id : true,
                comment : true,
                rating : true,
                createdAt : true,
                updatedAt : true,
                user : {
                    select : {
                        name : true
                    }
                }
            }
        })
        if(res.length!==0){
            return res
        }
        else{
            return false
        }
    }
    
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
export const deleteFeedback = async(id:number)=>{
    const res = await prisma.feedback.delete({
        where : {
            id
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