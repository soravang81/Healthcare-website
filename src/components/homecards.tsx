import { VariantProps } from "class-variance-authority";
import { Card , cardVariant } from "./card";
import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

interface TxtCardProps extends VariantProps<typeof cardVariant> {
    img: number;
    text : string;
    iconclr : string
}

const TxtCard = ({ img, text ,iconclr , variant, colour }: TxtCardProps) => {
    const iconstyle = `w-16 p-2 border rounded-full bg-${iconclr}-200` 
    return(
        <Card colour={colour} variant={variant} className="p-8 w-auto lg:h-96 min-h-72 max-h-fit">
            <img src={`/icons/image${img}.png`} className={`w-16 p-2 border rounded-full ${iconclr === "red" ? "bg-red-200" :iconclr === "purple" ? "bg-purple-200" :"bg-green-200"}`}></img><br/>
            <h3 className="text-2xl font-semibold text-slate-700">{text}</h3><br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corrupti provident, quis numquam eius non, commodi.</p><br/>
            {/* <button className="text-xl font-semibold text-teal-400">Read more</button> */}
        </Card>
    )

}
interface imgprops extends HTMLAttributes<HTMLDivElement>{
    children? : ReactNode;
    img? : number
}
export const ImgCard = ( {img , ...props}:imgprops)=>{
    return(
        <div className="xl:w-[30rem] xl:h-[25rem] lg:w-[27rem] lg:h-[20rem] sm:w-96 sm:h-[12rem] w-40 h-32 rounded-3xl">
            <img className="w-full bg-cover h-full rounded-3xl" src={`/images/img${img}.jpg`}></img>
        </div>
    )
}
export const DoctorsProfile = ({img , ...props}:imgprops)=>{
    return(
        <div className="flex flex-col items-center xl:w-[25rem]  lg:w-[20rem] lg:min-h-[18rem] w-full sm:min-h-[16rem]  min-h-24 h-fit rounded-3xl bg-purple-100">
            <img className="w-full bg-cover h-full rounded-3xl p-1" src={`/images/image${img}.png`}></img>
            <div className="px-3 pb-3 pt-2 flex flex-col items-center justify-center">
                <h2 className="lg:text-2xl md:text-lg sm:text-md text-base  font-semibold text-purple-950">Dr. Sudeshna Sinha</h2>
                <h3 className=" text-base text-purple-950">MBBS , MD (Rheumatology)</h3>
            </div>
        </div>
    )
}
export function HomeTxtCards(){
    return(
        <>
        <TxtCard img={1} iconclr={"emerald"} variant={"horizontal_md"} colour={"green"} text="Early cancer detection"/>
        <TxtCard img={2} iconclr={"red"} variant={"horizontal_md"} colour={"red"} text="Clinical neurophysiology"/>
        <TxtCard img={3} iconclr={"purple"} variant={"horizontal_md"} colour={"purple"} text="Gastoenterology"/>
        </>
    )
}
        