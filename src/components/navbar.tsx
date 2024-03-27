"use client"

import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar(){
    const [isOpen , setisOpen] = useState(false);
    return(
        <div className="flex justify-between border-b p-4 align-middle gap-10 bg-purple-100">
            <div className="flex flex-row text-center items-center justify-self-start"><span className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold">Healthcare</span></div>
            {!isOpen ? <div className=" hidden lg:flex md:flex-shrink" >
                <Button variant={"link"} size={"xl"} value={"About"} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1 "></Button>
                <Button variant={"link"} size={"xl"} value={"Services"} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1"></Button>
                <Button variant={"link"} size={"xl"} value={"Doctors"} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1"></Button>
                <Button variant={"link"} size={"xl"} value={"Blog"} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1"></Button>
                <Button variant={"link"} size={"xl"} value={"Contact"} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1"></Button>
            </div>: null}  
            <Button variant={"primary"}  size={"xl"} value={"Schedule Appointment"} className="rounded-lg lg:block hidden text-white font-semibold">
            </Button>
            <button className="lg:hidden block justify-self-end">menu</button>
        </div>
    )
}