import Image from "next/image"
import { Navbar } from "./navbar"
import { Button } from "./ui/button"
import { Card } from "./card"
import { HomeTxtCards } from "./homecards"

export function Homepage(){
    return(
        <> 
        {/* -----------    1st PAGE      ------------- */}
        <div className="bg-indigo-950 sm:p-12 p-8 flex flex-col items-center lg:gap-20 gap-12">
            <div className="lg:flex-row flex flex-col lg:justify-between xl:px-32  lg:px-24  md:px-12  md:gap-24 gap-10">
                <div className="lg:text-6xl text-5xl text-purple-600 font-bold lg:w-[45%]">We provide world class <span className="text-emerald-500 italic">treatment</span> to everyone.</div>
                <div className="lg:w-[45%] text-xl text-purple-800"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque facilis, labore 
                    delectus neque repudiandae fugit non iste repellendus dolorem assumenda! Deleniti tempore quae 
                    earum reprehenderit officia vero architecto et?</p><br/><br/>
                    <Button variant={"primary"}  size={"xl"} value={"Make Appointment ->"}  className="text-white font-semibold"/>
                </div>
            </div>
            <img src={"/images/home.jpg"} alt="img" className="lg:w-[80%] xl:w-10/12 w-full lg:h-[90vh] md:h-[70vh] h-[50vh] rounded-3xl object-cover"/>
        </div>
        {/* -------------      2nd PAGE       ----------- */}
        <div className=" xl:p-44 lg:p-36 md:p-24 p-8 flex flex-col gap-20">
            <div>
                <h1 className="lg:text-7xl text-3xl font-semibold">Our <span className="text-purple-500 italic">core</span> Values</h1><br/><br/>
                <h2 className="lg:text-4xl text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio minus rerum voluptatem.</h2>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-10 w-auto min-h-fit h-fit">
                <HomeTxtCards/>
            </div>
        </div>
        </>
    )
}