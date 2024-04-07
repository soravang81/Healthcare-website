"use client"
import { Card } from "@/components/card"
import { createFeedback, deleteFeedback, getFeedback } from "@/utils/comment"
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { DeleteCommentbtn, comments, deletebtn, reFetch } from "@/app/recoil/state"
import { HiArchiveBoxXMark } from "react-icons/hi2"


export function CommentCard(){
    const [showDeletebtn , setShowDeletebtn] = useRecoilState(deletebtn)
    const [isEmpty , setIsEmpty] = useState(false)
    const refetchComments = useRecoilValue<boolean>(reFetch)
    const [res , setCommentArr] = useRecoilState(comments)
    useEffect(()=>{
        async function getcmnt() {
        setIsEmpty(false)
        const res = await getFeedback()
        console.log(res.length)
        if(res.length<1){
            console.log("emptyy")
            setIsEmpty(true)
        }
        setCommentArr(res)
        }
        getcmnt()
    },[refetchComments])
    return(
        <>
            {isEmpty ? <div>There are no comments yet</div>:null}
            {res.map((item, index) => (
                <div key={index} onMouseOver={()=>setShowDeletebtn(true)} onMouseLeave={()=>setShowDeletebtn(false)} >
                    
                    <Card variant={"horizontal_sm"} colour={"purple"} className="flex flex-col p-6 gap-6">
                        <div className="flex gap-5  w-full ">
                            <img src={`/profile/image${index+1}.jpg`} className="rounded-full w-12 object-cover" alt="img"/>
                            <div className="flex flex-col  w-full ">
                                <h3 className="text-lg  w-full ">{item.user.firstName} {item.user.lastName}</h3>
                                {   item.rating === 1 ? '★' :
                                    item.rating === 2 ? '★★' :
                                    item.rating === 3 ? '★★★' :
                                    item.rating === 4 ? '★★★★' :
                                    item.rating === 5 ? '★★★★★' :
                                    null
                                }
                            </div>
                            <Deletebtn id={item.id.toString()} className="items-end"/>
                        </div>
                        <div>
                            <h2>{item.comment}</h2>
                        </div>
                        <div className="flex items-end h-full">
                            <h2>{item.updatedAt.toLocaleString()}</h2>
                        </div>
                    </Card>
                </div>
            ))}
        </>
    )
}
interface btnPropss extends  ButtonHTMLAttributes<HTMLButtonElement> {
    children? : ReactNode;
}
const Deletebtn = ( { ...props}:btnPropss)=>{
    
    const [refetch,setrefetch] = useRecoilState<boolean>(reFetch)
    const [deletedmsg , setDeletedmsg] = useRecoilState(DeleteCommentbtn)
    const showDeletebtn = useRecoilValue(deletebtn)

    async function deletecomment(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const res = await deleteFeedback(parseInt(e.currentTarget.id))
        setrefetch(!refetch)
        if(res){
            setDeletedmsg(true)
            setTimeout(()=>{
                setDeletedmsg(false)
            },5000)
        }
    }
    return(
        <>
            {deletedmsg ? <div className="top-20 left-0 right-0 z-10 text-3xl font-semibold text-green-600 text-center fixed">Your Feedback has been Deleted.</div>:null}
            {showDeletebtn ? 
            
            <div className="flex">
                <button onClick={(e)=>deletecomment(e)} {...props}  ><HiArchiveBoxXMark />
                </button>
                </div>:null}
            {/* Will add user to be able to remove his comment only when i add signup and login feature  */}
        </>
)}
export function Create(){
    const [refetch,setrefetch] = useRecoilState<boolean>(reFetch)
    return(
        <button onClick={async()=>{await createFeedback("sourav" , "fbdgbfdgbdbfdbfbtyntbdfgbtbgfdsvsgrenbgd" , 4);setrefetch(!refetch)}}>hii</button>
    )
}