"use client"
import { Card } from "@/components/card"
import { createFeedback, deleteFeedback, getFeedback } from "@/utils/comment"
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { CommentPopup, DeleteCommentbtn, comments, deletebtn, Curremail, reFetch } from "@/app/recoil/state"
import { HiArchiveBoxXMark } from "react-icons/hi2"


export function CommentCard(){
    const [showDeletebtn , setShowDeletebtn] = useRecoilState<boolean>(deletebtn)
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
export function Addbtn(){
    const [isPopup,setPopup] = useRecoilState<boolean>(CommentPopup)
    const handleClick = () =>{
        setPopup(true)
    }
    return(
        <button className="self-end"
            onClick={handleClick}>
            <img src="/icons/add.svg" className="w-14"></img>
        </button>
    )
}

export function CommentAddPopup() {
  const [isPopup, setPopup] = useRecoilState<boolean>(CommentPopup);
  const [refetch,setrefetch] = useRecoilState<boolean>(reFetch)
  const [email, setEmail] = useRecoilState<string>(Curremail);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleClick = (index: number) => {
    setRating(index + 1);
  };
  const handleSubmit = async()=>{
    const res = await createFeedback(email,comment,rating,)
    setPopup(false)
    setrefetch(!refetch)
  }
  return (
    <>
      {isPopup ? 
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg z-10" onClick={() => setPopup(false)}>
          <div className="w-[20rem] h-[20rem] bg-slate-50 shadow-md rounded-xl p-5 z-20" onClick={(e)=>e.stopPropagation()}>
            <div className="flex flex-col">
                {/* <h1 className="font-semibold">Add you rating and comment.</h1> */}
                <div className="flex items-center ">
                    <p className="mr-2 text-lg font-semibold">Ratings ? :</p>
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-6 h-6 fill-current cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                            viewBox="0 0 24 24"
                            onClick={() => handleClick(index)}
                            >
                            <path
                            fillRule="evenodd"
                            d="M12 2l2.45 7.52H22l-6.29 4.58L17.2 22 12 17.27 6.8 22l1.53-4.9L2 9.52h6.55z"
                            clipRule="evenodd"
                            />
                        </svg>
                    ))}
                    <span className="ml-2">{rating} / 5</span>
                </div>
                <h2 className="mr-2 text-lg font-semibold ">Comment :</h2>
                <textarea onChange={(e)=>setComment(e.target.value)} className="border border-black w-[90%] resize-none h-44 self-center m-2 p-1"></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div> 
        : null
      }
    </>
  );
}
