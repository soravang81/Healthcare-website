import { cn } from "@/utils/cn-merge";
import { VariantProps, cva } from "class-variance-authority";
import {  HTMLAttributes, ReactNode } from "react";

export interface cardprops extends HTMLAttributes<HTMLDivElement> , VariantProps<typeof cardVariant>{
    children? : ReactNode,
    image? : number,
    type? : string,
    color? :string,
    img? :number
}
export const cardVariant = cva("border" , {
    variants : {
        variant : {
            vertical_sm : "rounded-lg w-[20rem] h-[26rem]",
            vertical_md : "rounded-lg w-[24rem] h-[30rem]",
            vertical_lg : "rounded-lg w-[28rem] h-[34rem]",
            vertical_xl : "rounded-lg w-[32rem] h-[38rem]",
            horizontal_sm : "rounded-lg h-[20rem] w-[24rem]",
            horizontal_md : "rounded-lg h-[24rem] w-[28rem]",
            horizontal_lg : "rounded-lg h-[28rem] w-[32rem]",
            horizontal_xl : "rounded-lg h-[32rem] w-[36rem]"
        },
        colour : {
            red : "bg-red-100",
            green : "bg-green-100",
            blue : "bg-blue-100",
            purple : "bg-purple-100"
        }
    },
    defaultVariants : {
        variant : "vertical_md",
        colour : "purple"
    }

})

export function Card({children , className , variant , image , colour , ...props}:cardprops){
    const imageurl = `/images/image${image}.png`;
    return(
        <>
        {image ? <div>
            <img src={imageurl} alt="img"></img>
        </div>
        :<div>
            <div className={cn(cardVariant({variant , colour , className}))} {...props}>{children}</div>
        </div>}
        </>
    )
}