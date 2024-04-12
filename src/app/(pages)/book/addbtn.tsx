"use client"
import { CommentPopup, currentUserEmail } from "@/recoil/state"
import { getSession } from "next-auth/react"
import { useRecoilState } from "recoil"

export default function Addbtn(){
    const [isPopup,setPopup] = useRecoilState<boolean>(CommentPopup)
    const handleClick = async() =>{
        const res = await getSession()
        // console.log(res?.user?.email)
        setPopup(true)
    }
    return(
        <button className="self-end"
            onClick={handleClick}>
            <img src="/icons/add.svg" className="w-14"></img>
        </button>
    )
}