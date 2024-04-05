import { Button } from "./ui/button"
import { DoctorsProfile, HomeTxtCards, ImgCard } from "./homecards"

export async function Homepage(){
    const body = {
        email : "soww5acsdzgmail.com",
        password : "jhab6f8af",
        firstName : "dahgfvajfg",
        lastName : "fjahfjhgf",
        phoneNumber : "23553234534",
        time : "4 pm",
        department : "rheumatology",
        note : "please book my psofoasnfsjgbhsfg",
        date : "4 april 2024",
        doctor  : "dr sudeshnu"
        }
    return(
        <> 
        {/* -----------    1st PAGE      ------------- */}
        <div className="bg-indigo-950 md:p-24 sm:p-16 p-8 flex flex-col items-center lg:gap-20 gap-12">
            <div className="lg:flex-row flex flex-col lg:justify-between  md:gap-24 gap-10">
                <div className="lg:text-6xl text-5xl text-purple-600 font-bold lg:w-[45%]">We provide world class <span className="text-emerald-500 italic">treatment</span> to everyone.</div>
                <div className="lg:w-[45%] text-xl text-purple-800"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque facilis, labore 
                    delectus neque repudiandae fugit non iste repellendus dolorem assumenda! Deleniti tempore quae 
                    earum reprehenderit officia vero architecto et?</p><br/><br/>
                    <Button variant={"primary"}  size={"xl"} value={"Make Appointment ->"} path="book" className="text-white font-semibold"/>
                </div>
            </div>
            <img src={"/images/home.jpg"} alt="img" className="w-full md:h-[90vh] h-[50vh] rounded-3xl "/>
        </div>
        {/* -------------      2nd PAGE       ----------- */}
        <div className=" md:p-24 sm:p-16 p-8 flex flex-col gap-20 min-h-[100vh]">
            <div>
                <h1 className="lg:text-7xl text-3xl font-semibold">Our <span className="text-purple-500 italic">core</span> Values</h1><br/><br/>
                <h2 className="lg:text-4xl text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio minus rerum voluptatem.</h2>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-10 w-auto min-h-fit h-fit">
                <HomeTxtCards/>
            </div>
        </div>
        {/* -----------      3rd PAGE       ----------- */}
        <div className="bg-purple-400 min-h-screen md:p-24 sm:p-16 p-8 flex flex-col md:gap-24 gap-10">
            <div className="flex md:flex-row flex-col gap-20 h-fit">
                <h1 className="lg:text-6xl text-3xl text-purple-950 font-semibold h-fit">Finding new ways to improve the <span className="text-white italic">health and well-being</span> of people everywhere</h1>
                <div className="flex flex-col gap-10 min-w-[30%] h-fit">
                    <h2 className="lg:text-2xl text-xl h-fit ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio minus rerum voluptatem.</h2>
                    <Button variant={"primary"} size={"xl"} value={"Read More"} className="lg:w-60 md:w-48 w-32 text-white font-semibold"/>
                </div>
            </div>
            <div className="flex flex-row lg:gap-10 md:gap-6 gap-2">
                <ImgCard img={2}  /> <ImgCard img={3} /> <ImgCard img={4} />
            </div>
        </div>
        {/* -----------      4th PAGE       ----------- */}
        <div className="md:p-24 sm:p-16 p-8 flex flex-col  gap-20 min-h-[100vh]">
            <div>
                <div className="flex md:flex-row flex-col justify-between lg:gap-20 gap-8 h-fit lg:items-end items-start">
                    <h1 className="lg:text-6xl text-3xl text-purple-950 font-semibold h-fit lg:max-w-[40vw]">Discover Our Highly Qualified <span className="text-purple-400 italic">Doctors</span></h1>
                        <Button variant={"primary"} size={"md"} value={"Read More"} className="lg:w-56 md:w-40 w-32 lg:h-18 md:h-12 h-12 text-white font-semibold"/>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center  lg:gap-10 md:gap-6 gap-2">
                <DoctorsProfile img={1}/>
                <DoctorsProfile img={2}/>
                <DoctorsProfile img={3}/>
            </div>
        </div>
        {/* -----------      5th PAGE       ----------- */}
        <div className="md:p-24 sm:p-16 p-8 flex flex-col  gap-20 min-h-[100vh] bg-teal-400">
            <h1 className="lg:text-6xl text-3xl text-purple-950 font-semibold">Frequently Asked <span className="text-purple-500 italic">Questions</span></h1>
        </div>
        </>
    )
}