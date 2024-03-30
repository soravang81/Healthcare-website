import { createAppointment } from "@/utils/appointments";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db/db";


export async function GET(req : NextRequest){
    const res = await prisma.appointments.findMany({select : {userId : true,time : true}})
    return NextResponse.json({
        res
    })
}