"use client"

import { Button} from "@/components/ui/button";
import { createAppointment } from "@/utils/appointments";
import { useRef, useState } from "react"
import Loader from "../../../../loading";
import { useRecoilState } from "recoil";
import { isLoading } from "@/recoil/state";



export default function BookForm(){
    const [firstName,setfName] = useState<string>("");
    const [lastName,setlName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [phoneNumber,setPhoneNumber] = useState<string>("");
    const [date, setSelectedDate] = useState<string>("");
    const [note,setNote] = useState<string>("");
    const [department, setDepartment] = useState<string>("")
    const [isBooked, setBooked] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null);
    const [loading , setLoading] = useRecoilState<boolean>(isLoading)

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        setLoading(true)
        e.preventDefault()
        formRef.current?.reset()
        const res = await createAppointment({email,phoneNumber,firstName,lastName,department,date,note})
        setLoading(false)
        if(res){
            setBooked(true)
        }
    }
    return(
        <div className="w-full h-full  md:p-4 p-2 text-xl">
            {loading ? <Loader/> : null}
            {isBooked ? <div>Appointment book succesfully</div> : null}
            <form ref={formRef} onChange={()=>{setBooked(false);setLoading(false)}}>
                <div className="flex gap-4 p-2 w-full md:flex-row flex-col">
                    <label className="p-1 flex flex-col gap-2 w-full ">First name*<br/>
                        <input
                            type="text"
                            name="fName"
                            placeholder="firstname"
                            className="border-2 rounded-md p-2 w-full"
                            onChange={(e)=>setfName(e.target.value)}
                        />
                    </label>
                    <label className="p-1 flex flex-col gap-2 w-full ">Last name*<br/>
                        <input
                            type="text"
                            name="lName"
                            placeholder="lastname"
                            className=" border-2 rounded-md p-2 w-full"
                            onChange={(e)=>setlName(e.target.value)}
                        />
                    </label>
                </div>
                <label className="p-3 flex flex-col gap-2 w-full">Email*<br/>
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email"
                        className="border-2 rounded-md p-2"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <div className="flex gap-4 p-2 w-full lg:flex-row flex-col">
                    <label className="p-1 flex flex-col gap-2 w-full lg:w-[50%]">Phone*<br/>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Your Phone number"
                            className=" border-2 rounded-md p-2 w-full"
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                        />
                    </label>
                    <label className="p-1 flex flex-col gap-2 w-full lg:w-[50%]">Appointment Date*<br/>
                        <input
                            type="date"
                            className="border-2 rounded-md p-2 w-full"
                            onChange={(e)=>setSelectedDate(e.target.value)}
                            ></input>
                    </label>
                </div>
                <label className="p-3 flex flex-col gap-2 w-full">Department*<br/>
                    <select className="p-2 border-2 rounded-md" onChange={(e)=>setDepartment(e.target.value)}>
                        <option value="Rheumatology">Rheumatology</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Obstetrics">Obstetrics</option>
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Oncology">Oncology</option>
                    </select>
                </label>
                <label className="p-3 flex flex-col gap-2 w-full">Note*<br/>
                    <input
                        type="text"
                        name="note"
                        placeholder="Enter your message here..."
                        className="border-2 rounded-md p-2"
                        onChange={(e)=>setNote(e.target.value)}
                    />
                </label><br/><br/>
                <label className="p-3 flex flex-col gap-2 w-[60%]"> 
                <Button variant={"primary"} size={"xl"} value={"Submit"} className="lg:w-60 md:w-48 w-32 text-white font-semibold" action={handleSubmit}/>
                </label><br/><br/>
            </form>
        </div>
    )
}
