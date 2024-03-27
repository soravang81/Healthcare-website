import { cn } from "@/utils/cn-merge";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface btnProps extends ButtonHTMLAttributes<HTMLButtonElement> , VariantProps<typeof buttonvariant> {
    children? : ReactNode;
}

const buttonvariant = cva( "border" , {
    variants : {
        variant : {
            primary : "bg-teal-500 hover:bg-teal-600  rounded-md border-none",
            secondary : "bg-gray-400  hover:bg-gray-500rounded-md border-none opacity-40",
            destructive : "border-none rounded-md bg-red",
            link : "bg-transparent border-none ",
            outline : "x-2 border-black",
        },
        size : {
            sm : "px-2 py-1 text-sm",
            md : "px-4 py-1 text-",
            lg : "lg:px-6 lg:py-2 lg:text-lg md:px-5 md:py-2 md:text-base sm:px-4 sm:py-1 sm:text-sm px-3 py-1 text-sm",
            xl : "lg:px-9 lg:py-3 lg:text-xl md:px-6 md:py-3 md:text-lg sm:py- sm:px-2 py-4 px-2 text-base",
            xxl: "px-16 py-4 text-2xl"
        }     
    },
    defaultVariants : {
        variant : "primary"
    }
})


export function Button({children , className , variant , size , value , ...props }:btnProps){
    return (
        <>
            <button className={cn(buttonvariant({variant , size , className }))} {...props}>{value}</button>
        </>
    );
}
