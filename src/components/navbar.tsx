"use client"

import { useState } from "react";
import { Button, btnProps, buttonvariant } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface buttonprop extends VariantProps<typeof buttonvariant>{
    children? : ReactNode;
    text? : string;
}
const NavbarOptions = ({text} : buttonprop)=>{
    return(
        <Button variant={"link"} size={"lg"} value={text} className="rounded-lg hover:text-slate-500 text-2xl font-semibold lg:px-3 md:px-1 "></Button>
)}
export function Navbar(){
    const [isOpen , setisOpen] = useState(false);
    return(
        <div className="flex justify-between border-b py-4 px-12 align-middle gap-10 bg-purple-100">
            <div className="flex flex-row text-center items-center justify-self-start"><span className="lg:text-3xl md:text-2xl sm:text-xl text-lg text-center font-bold">Healthcare</span></div>
            {!isOpen ? <div className=" hidden lg:flex md:flex-shrink" >
                <NavbarOptions text="Services"/>
                <NavbarOptions text="Doctors"/>
                <NavbarOptions text="Blog"/>
                <NavbarOptions text="Contact"/>
                <NavbarOptions text="Appointments"/>
            </div>: null}  
            <Button variant={"primary"}  size={"md"} value={"Schedule Appointment"} className="rounded-lg lg:block hidden text-white font-semibold" >
            </Button>
            <Button variant={"link"} size={"lg"} value={"Menu"} className="lg:hidden block justify-self-end lg:text-3xl md:text-2xl sm:text-xl text-lg text-center font-semibold"></Button>
        </div>
    )
}