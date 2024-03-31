import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db/db";


export async function POST(req : NextRequest){
    const { email } = await req.json();
    const res = await prisma.appointments.findMany({
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
    return NextResponse.json({
        res
    })
}