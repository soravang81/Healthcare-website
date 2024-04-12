"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { verifyUsers } from "@/utils/users";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentUserEmail, loggedin} from "@/recoil/state";
import axios from "axios";

export default function SigninComp() {
  const [currentemail , setcurEmail] = useRecoilState(currentUserEmail)
  const [isLoggedin , setisLoggedin] = useRecoilState(loggedin)
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = async ()=>{
    const res = await axios.get("http://localhost:3000/api/auth/signin" , {
      params: {
        email: currentemail,
        password
      }
    })
    // const res = await verifyUsers({email:currentemail, password})
    // if(res){
    //   console.log(currentemail)
    //   setisLoggedin(true)
    //   router.push("/home")
  }
  return (
    <div className="flex justify-center align-middle pt-20 ">
      <div className="flex flex-col justify-center align-middle border shadow-2xl p-8 lg:w-96 md:w-80 w-72  gap-8">
        <h1 className=" text-4xl font-semibold text-center">Sign in</h1>
        <p className=" text-lg font-medium text-center">Please sign in to continue.</p>
        <div className="flex flex-col justify-center align-middle gap-8">
          <input className=" p-4 border-b w-80%" type="text" placeholder="Username" onChange={(e) => setcurEmail(e.target.value)} />
          <input className=" p-4 border-b w-80%" type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
          <button 
            className=" bg-blue-500 p-4 rounded-lg hover:bg-blue-800" 
            onClick={handleClick}>Submit
            </button>
        </div>
      </div>
    </div>
  );
};