import BookForm from "./bookform";
import { Addbtn, CommentAddPopup, CommentCard } from "./comments";

export default async function Book (){
    return(
        <>
        <div className=" bg-indigo-950 md:p-24 sm:p-16 p-8 flex flex-col items-center lg:gap-20 gap-12">
            <div className=" flex flex-col items-center md:gap-16 gap-10 w-full">
                <div className="lg:text-7xl text-5xl text-purple-600 font-bold text-center">Book your <span className="text-emerald-500 italic">appointment</span>
                </div>
                <div className=" max-w-[70%] text-lg text-purple-800 text-center"><p>Explore our blog for the latest medical knowledge, patient strories , and tips to lead a healthier life.
                    </p><br/><br/>
                </div>
            </div>
        </div>
        <div className="md:p-24 sm:p-16 p-8 lg:gap-20 gap-12 flex lg:flex-row flex-col w-full ">
            <BookForm/>
            <div className=" w-full h-full rounded-3xl pt-7">
                <img src="/images/book.png" className=" w-full h-full rounded-3xl" alt="img"></img>
            </div>
        </div>
        {/* -----------      comments       ----------- */}
        <div className="md:px-24 md:pb-24 sm:px-16 sm:pb-16 px-8 pb-8 flex flex-col items-start lg:gap-20 gap-12 ">
            <div className="flex justify-between w-full">
                <h1 className="lg:text-6xl text-5xl text-purple-950 font-bold self-start">Our <span className="text-purple-500 italic">patients</span> Feedbacks</h1>
                <Addbtn/>
                <CommentAddPopup/>
            </div>
            <div className="flex gap-10 overflow-hidden">
                <CommentCard />
            </div>
        </div>
        </>
    )
}
