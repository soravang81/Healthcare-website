"use client"

import {  useEffect, useRef, useState } from "react"
import { deleteAppointment , getAppointments, updateAppointment } from "../../../utils/appointments"
import { Button } from "@/components/ui/button"
import Loader from "../../../../loading"
import { useRecoilState } from "recoil"
import { isLoading } from "../../recoil/state"
import { useRouter } from "next/navigation"

export default function Appointments(){
    interface data{
        time : string,
        doctor : string,
        date : string,
        department : string
    }
    const [email , setEmail] = useState<string>("")
    const [newDate , setNewDate] = useState<string>("")
    const [dateSelect , setDateSelect] = useState<boolean>(false)
    const [isfetched , setIsFetched] = useState<boolean>(false)
    const [isDeleted , setIsDeleted] = useState<boolean>(false)
    const [isUpdated , setIsUpdated] = useState<boolean>(false)
    const [notFound , setNotFound] = useState<boolean>(false)
    const [data , setData] = useState<data>()
    const inputform = useRef<HTMLFormElement>(null);
    const [loading , setLoading] = useRecoilState<boolean>(isLoading)
    const router = useRouter()

    useEffect(()=>{
        if(isfetched){
            getdata()
        }
    },[])
    const getdata = async()=>{
        setLoading(true)
        const res = await getAppointments(email)
        if(res){
            setLoading(false)
            console.log(res)
            setData(res || null)
            setIsFetched(true)
        }
        else{
            setLoading(false)
            setNotFound(true)
        }
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        // inputform.current?.reset()
        e.preventDefault()
    }
    const cancelAp = async ()=>{
        setLoading(true)
        const res = await deleteAppointment(email);
        setLoading(false)
        if(res){
            setIsDeleted(true)
            setTimeout(() => {
                setIsDeleted(false)
            }, 5000);
        }
    }
    const handleEdit = ()=>{
        setDateSelect(true)
        const res = updateAppointment(email,newDate)
        setLoading(false)
    }
    const updateAp = async ()=>{
        setLoading(true)
        const res = await updateAppointment(email , newDate);
        setLoading(false)
        if(res){
            setIsUpdated(true)
        }
    }
    return(
        <>
        <div className=" bg-indigo-100 min-h-[89vh] md:p-24 sm:p-16 p-8 lg:pt-5 flex flex-col items-center lg:gap-20 gap-12">
            <div className=" flex flex-col items-center md:gap-8 gap-6 w-full">
                <div className="lg:text-5xl text-2xl text-purple-600 font-bold text-center">Your <span className="text-emerald-500 italic">Appointments</span>
                </div>
                {/* <div className=" max-w-[70%] text-base text-purple-800 text-center"><p>Get details our your appointments here.
                    </p>
                </div> */}
                <div>If you want to book an Appointment click <button className="border-none bg-transparent underline" onClick={()=>router.push("/book")}>here</button></div>
                <div className="flex lg:flex-row flex-col gap-10">
                <form ref={inputform}>
                <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    className="border-2 rounded-md lg:p-4 p-2 "
                    onChange={(e)=>{
                        setEmail(e.target.value);
                        setIsFetched(false);
                        setIsDeleted(false)
                        setDateSelect(false)
                        setIsUpdated(false)
                    }}
                />
                </form>
                <Button variant={"primary"} size={"lg"} value={"Submit"} className="lg:w-60 md:w-48 w-32 text-white font-semibold" action={handleSubmit} fnc={getdata} onClick={()=>setLoading(true)} type="submit"/>
                </div>
                {isDeleted ? <div>Appointment Cancelled succesfully.</div> : null}
                {isUpdated ? <div>Appointment Updated succesfully.</div> : null}
                {loading ? <Loader/> : null}
                {isfetched && data && data ?
                <div>
                    <div>
                        Your Appointment regarding {data.department} specialist has been booked with the following details:<br/><br/>
                        Doctor  : {data.doctor}<br/><br/>
                        At : {data.time}<br/><br/>
                        on Date : {data.date}<br/><br/>
                    </div>
                    <div className="flex gap-10">
                        <Button variant={"primary"} size={"md"} value={("Cancel !")} fnc={cancelAp}/>
                        <Button variant={"primary"} size={"md"} value={("Edit !")} fnc={handleEdit}/>
                        {dateSelect ? <input type="date" className="border-2 rounded-md p-2 w-20" onChange={(e)=>setNewDate(e.target.value)} ></input>:null}
                        {dateSelect ? <Button variant={"primary"} size={"sm"} value={("Submit")} fnc={updateAp}/>:null }
                    </div>
                </div> : null}
                {notFound ? <div>You have no Appointments yet. You can book one from <button className="border-none bg-transparent underline" onClick={()=>router.push("/book")}>here</button></div>:null}
            </div>
        </div>
        </>
    )
}